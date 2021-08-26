class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    def index
        users = User.all
        render json: users
    end

    def show
        user = find_user
        render json: user, include: :user
    end

    def me
        user = find_user
        if user
            render json: user
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    private

    def find_user
        User.find_by(id: params[:id]) 
    end

    def render_not_found_response
        render json: { error: "User not found" }, status: :not_found
    end
end
