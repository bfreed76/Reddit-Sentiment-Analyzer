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
    last_results = ResultsJoin.all.limit(20).sort_by(&:created_at)
    render json: last_results
  end

  private

  def find_results_join
    ResultsJoin.find_by(id: params[:id])
  end

  def render_not_found_response
    render json: { error: 'Record not found' }, status: :not_found
  end
end
