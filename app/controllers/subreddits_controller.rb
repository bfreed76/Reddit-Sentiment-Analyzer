class SubredditsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    subreddits = Subreddit.all
    render json: subreddits
  end

  def show
    subreddits = find_subreddits
    render json: subreddits
  end

  private

  def find_subreddits
    Subreddit.find_by(id: params[:id])
  end

  def render_not_found_response
    render json: { error: 'Record not found' }, status: :not_found
  end
end
