module Api 
  class ResultsJoinsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
      results_joins = ResultsJoin.all
      render json: results_joins
    end

    def show
      results_join = find_results_join
      render json: results_join
    end
  
    def top_content
      last_results = ResultsJoin.all.sort_by(&:created_at).reverse      
      render json: last_results
    end
    
    def my_searches
      my_results = ResultsJoin.where(user_id: session[:user_id]).reverse      
      render json: my_results
    end

    private

    def find_results_join
      ResultsJoin.find_by(id: params[:id])
    end

    def render_not_found_response
      render json: { error: 'Record not found' }, status: :not_found
    end
  end
end
