module Api 

# For future development

  class UserPostsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    before_action :current_user

    def index
      p @current_user
      user_posts = UserPost.all
      render json: user_posts
    end

    def show
      user_posts = find_user_posts
      render json: user_posts
    end

    private

    def find_user_posts
      UserPost.find_by(id: params[:id])
    end

    def render_not_found_response
      render json: { error: 'Record not found' }, status: :not_found
    endE
  end

end

end