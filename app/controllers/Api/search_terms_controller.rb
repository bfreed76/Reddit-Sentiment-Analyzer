module Api 
  class SearchTermsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response


    def index
      search_term = SearchTerm.all
      render json: search_term
    end

    def show
      search_term = find_search_term
      render json: search_term
    end

    private

    def find_search_term
      SearchTerm.find_by(id: params[:id])
    end

    def render_not_found_response
      render json: { error: 'Record not found' }, status: :not_found
    end
  end
end
