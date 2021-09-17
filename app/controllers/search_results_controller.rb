require 'httparty'

class SearchResultsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    require "ibm_watson/authenticators"
    require "ibm_watson/natural_language_understanding_v1"
    include IBMWatson

    def initialize
        authenticator = Authenticators::IamAuthenticator.new(
            apikey: ENV["NATURAL_LANGUAGE_UNDERSTANDING_APIKEY"]
            )
        # creates new instance of NLU
        natural_language_understanding = NaturalLanguageUnderstandingV1.new(
            version: "2021-08-01",
            authenticator: authenticator
            )
        # provides service URL
        natural_language_understanding.service_url = ENV["NATURAL_LANGUAGE_UNDERSTANDING_URL"]
        
        @nlu = natural_language_understanding
    end

    def get_reddit
        # GETS data from pushshift API
        response = HTTParty.get(params[:url])
        searchTerms = (params[:searchTerms]).gsub('"',"").split()
        res = response.parsed_response
            # Transforms pushshift data before sending to Watson and DB
            data = res["data"]
            data_map = data.map {|entry| entry["body"]}
            data_str = data_map.to_s
            # GETS analysis from Watson NLU
            #!! Watson offline
            watson = @nlu.analyze(
                text: "#{data_map}",
                features: {
                    sentiment: {document: true},
                    emotion: {
                        document: true,
                        targets: searchTerms}
                    },
                    language: "en",
                    return_analyzed_text: true, 
                    ) 
                    
                    results = JSON.pretty_generate(watson.result) 
                    
                    #Save all data to DB

                    user = params[:user]["username"]
                    userId = session[:user_id]
                    subr = Subreddit.find_or_create_by(name: params[:subreddit])
                    auth = Author.find_or_create_by(name: params[:sUsername])
                    sear = SearchTerm.find_or_create_by(search_term: params[:searchTerms])
                    
                    sentDoc = 
                    # "sentDoc"
                    # {{"testscore"=>-0.548657, "label"=>"negative"}}
                    watson.result["sentiment"]["document"]
                    emoDoc = 
                    # "emoDoc"
                    # {"testemotion"=>{"sadness"=>0.10775, "joy"=>0.01927, "fear"=>0.058148, "disgust"=>0.248551, "anger"=>0.24569}}
                    watson.result["emotion"]["document"]
                    emoTarg = 
                    # "emoTarg"
                    # [{"testtext"=>"biden", "emotion"=>{"sadness"=>0.258686, "joy"=>0.095797, "fear"=>0.162138, "disgust"=>0.446691, "anger"=>0.239035}}]
                    watson.result["emotion"]["targets"]

                    newResJoin = ResultsJoin.create(user_id: userId, search_term_id: sear.id, subreddit_id: subr.id, author_id: auth.id) 

                    SearchResult.create(results_join_id: newResJoin.id, result_text: data_str, emo_doc_json: emoDoc, sent_doc_json: sentDoc, emo_search_json: emoTarg)
                    
                    results = {
                            user: user,
                            author: auth.name,
                            subreddit: subr.name,
                            sentimentDocument: sentDoc,
                            emotionDocument: emoDoc,
                            emotionTarget: emoTarg,
                            data: data
                        }

                    render json: results
    end

    def index
        search_results = SearchResult.all
        render json: search_results
    end
    
    def show
        search_result = find_search_results
        render json: search_result
    end

    # def top_content
    #     last_results = SearchResult.all.limit(20).sort_by(&:created_at).reverse      
    #     render json: last_results
    # end

  private

  def find_search_results
    SearchResult.find_by(id: params[:id])
  end

  def render_not_found_response
    render json: { error: 'Record not found' }, status: :not_found
  end
end
