require 'httparty'

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
        response = HTTParty.get("https://api.pushshift.io/reddit/search/comment/?q=science&subreddit=askscience")
        if response.code == 200
            res = response.parsed_response
            render json: res
        end
        byebug
    end

    private

    def find_search_results
        SearchResult.find_by(id: params[:id]) 
    end

    def render_not_found_response
        render json: { error: "Record not found" }, status: :not_found
    end
end
