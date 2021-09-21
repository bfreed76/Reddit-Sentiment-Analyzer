require 'httparty'

class SearchResultsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    require "ibm_watson/authenticators"
    require "ibm_watson/natural_language_understanding_v1"
    include IBMWatson

    def initialize
        # initialize Watson NLU auth
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
            res = response.parsed_response
        # Transforms pushshift data before sending to Watson and DB
        data = res["data"]
            data_map = data.map {|entry| entry["body"]}
            data_str = data_map.to_s

            # Pushshift API data to Watson NLU with options to analyze search terms and Watson config
            if params[:searchTerms].empty? 
                watson = @nlu.analyze(
                    text: "#{data_map}",
                    language: "en",
                    features: {
                        sentiment: {document: true},
                        emotion: {
                            document: true}
                        },
                    return_analyzed_text: true
                ) else (
                searchTerms = (params[:searchTerms]).gsub('"',"").split()
                    watson = @nlu.analyze(
                        text: "#{data_map}",
                        language: "en",
                        features: {
                            sentiment: {document: true},
                            emotion: {
                                document: true,
                                targets: searchTerms}
                            },
                    return_analyzed_text: true))
                    end    
                # Convert Watson results to JSON
                results = JSON.pretty_generate(watson.result) 
                    
                    # Saves all data to DB
                    user = params[:user]["username"]
                    userId = session[:user_id]
                    subr = Subreddit.find_or_create_by(name: params[:subreddit])
                    auth = Author.find_or_create_by(name: params[:sUsername])
                    sear = SearchTerm.find_or_create_by(search_term: params[:searchTerms])
                    sentDoc = watson.result["sentiment"]["document"]
                    emoDoc = watson.result["emotion"]["document"]
                        # Enables optional analysis of searchterms
                        if searchTerms 
                        emoTarg = watson.result["emotion"]["targets"] 
                        else
                        emoTarg = ""
                        end
                    newResJoin = ResultsJoin.create(user_id: userId, search_term_id: sear.id, subreddit_id: subr.id, author_id: auth.id) 
                    SearchResult.create(results_join_id: newResJoin.id, result_text: data_str, emo_doc_json: emoDoc, sent_doc_json: sentDoc, emo_search_json: emoTarg)
                    # Structure custom JSON
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

  private

    def find_search_results
        SearchResult.find_by(id: params[:id])
    end

    def render_not_found_response
        render json: { error: 'Record not found' }, status: :not_found
    end

end
