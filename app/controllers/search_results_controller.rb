require 'httparty'
require 'ibm_watson'

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
            # byebug
            render json: res
        end
        #3 if statements there, save new to table
    end

    private

    def find_search_results
        SearchResult.find_by(id: params[:id]) 
    end

    def render_not_found_response
        render json: { error: "Record not found" }, status: :not_found
    end

    def search_watson
        response = HTTParty.post({watson/v1/analyze, body: {url: params[:url]})
        if response.code == 200
            res = response.parsed_response
            byebug
            render json: res
        end
    end

end
