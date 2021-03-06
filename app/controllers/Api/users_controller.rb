module Api 

  class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    wrap_parameters format: []

    def index
      users = User.all
      render json: users
    end

    # Profile Page or show current user
    def show
      user = find_user
      render json: user
    end

    # Signup
    def create
      user =
        User.new(
          username: params[:username],
          email: params[:email],
          password: params[:password]
        )
      if user.save
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: { error: 'New user creation failed' }, status: :bad_request
      end
    end

    # Check user auth and info
    def me
      user = User.find_by(id: session[:user_id])
      if user
        render json: user
      else
        render json: { error: 'Not authorized' }, status: :unauthorized
      end
    end

    # Update user info
    def update
      user = User.find_by(id: session[:user_id])
      if user
        user.update(user_params)
        render json: user
      else
        render json: { error: "User not found" }, status: :not_found 
      end
    end

    private

    def user_params
      params.permit(:username, :email)
    end

    def find_user
      User.find_by(id: params[:id])
    end

    def render_not_found_response
      render json: { error: 'User not found' }, status: :not_found
    end
  end

end
