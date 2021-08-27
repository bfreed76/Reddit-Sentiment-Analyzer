class SessionsController < ApplicationController

    def create
        #login
        #if username and password, save userID is session hash
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :accepted
        else
            render json: { error: "Wrong email or password" }, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        render json: { message: "Logged Out"}
    end

end
