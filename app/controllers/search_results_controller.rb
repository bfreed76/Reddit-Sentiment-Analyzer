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
        response = HTTParty.get(params[:url])
        # if response.code == 200
        url = (params[:url])
        targs = (params[:searchTerms])
            data = response.parsed_response

            response = @nlu.analyze(
                url: url,
                features: {
                    emotion: {
                        document: true,
                        targets: [
                            "#{targs}"
                        ]
                    },
                    sentiment: {
                        targets: [
                            "trump"
                        ],
                    },
                    # entities: {sentiment: true, limit: 1}
                },
                return_analyzed_text: true,
            )
                
            results = JSON.pretty_generate(response.result)
            render json: results 
                # byebug
        # end
        #3 if statements here, save new to tables
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
