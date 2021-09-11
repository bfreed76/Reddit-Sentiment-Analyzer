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
            # watson = @nlu.analyze(
            #     text: "#{data_map}",
            #     features: {
            #         sentiment: {document: true},
            #         emotion: {
            #             document: true,
            #             targets: searchTerms}
            #         },
            #         return_analyzed_text: true, 
            #         ) 
                    
            #         results = JSON.pretty_generate(watson.result) 
                    
                    #Save all data to DB

                    subr = Subreddit.find_or_create_by(name: params[:subreddit])
                    auth = Author.find_or_create_by(name: params[:sUsername])
                    sear = SearchTerm.find_or_create_by(search_term: params[:searchTerms])
                    
                    sentDoc = "SENTDOC"
                    # watson.result["sentiment"]["document"].to_s
                    emoDoc = "EMODOC"
                    # watson.result["emotion"]["document"].to_s
                    emoTarg = "EMOTARG"
                    # watson.result["emotion"]["targets"].to_s

                    newResJoin = ResultsJoin.create(user_id: 1, search_term_id: sear.id, subreddit_id: subr.id, author_id: auth.id) 

                    SearchResult.create(results_join_id: newResJoin.id, result_text: data_str, emo_doc: emoDoc, sent_doc: sentDoc, emo_search: emoTarg)
                    
                    results = {
                            author: auth,
                            subreddit: subr,
                            searchTerms: sear,
                            sentimentDocument: sentDoc,
                            emotionDocument: emoDoc,
                            emotionTarget: emoTarg,
                            data: data
                        }

                    render json: results

                    # byebug
                         # Create hash from variables! 
                        # render json: {results: {"test": "You got it!"}
    end

    
    def index
        search_results = SearchResult.all
        render json: search_results
    end
    
    def show
        search_result = find_search_results
        render json: search_result
    end

  private

  # def watson_results
  #     response = HTTParty.post({watson/v1/analyze, body: {url: params[:url]})
  #     if response.code == 200
  #         res = response.parsed_response
  #         byebug
  #         render json: res
  #     end
  # end

  def find_search_results
    SearchResult.find_by(id: params[:id])
  end

  def render_not_found_response
    render json: { error: 'Record not found' }, status: :not_found
  end
end
