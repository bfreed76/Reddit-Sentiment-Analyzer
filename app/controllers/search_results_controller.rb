require 'httparty'
include IBMWatson
require "json"
require "ibm_watson/authenticators"
require "ibm_watson/tone_analyzer_v3"


class SearchResultsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    
    def index
        search_results = SearchResult.all
        render json: search_results
    end
    
    def show
        search_result = find_search_results
        render json: search_result
    end
    
    
    def get_reddit
        response = HTTParty.get(params[:url])
        if response.code == 200
            res = response.parsed_response

            authenticator = IBMWatson::Authenticators::IamAuthenticator.new(
            apikey: "{iam_api_key}"
            )
        
            tone_analyzer = IBMWatson::ToneAnalyzerV3.new(
            authenticator: authenticator,
            version: "2017-09-21"
            )
        
            tone_analyzer.service_url = "{service_url}"

            results = puts JSON.pretty_generate(tone_analyzer.tone(
                tone_input: res,
                content_type: "text/plain",
                sentences: nil, tones: nil, content_language: nil, accept_language: nil
                    ).result)
            byebug
                render json: results
            end
            #3 if statements here, save new to tables
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
        render json: { error: "Record not found" }, status: :not_found
    end


end
