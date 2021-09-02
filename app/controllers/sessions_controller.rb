class SessionsController < ApplicationController

    # Login (create session)
    def create
        #if username and password, save userID is session hash
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
        session[:user_id] = user.id
        p session
        render json: user, status: :accepted
        else
            render json: { error: "Wrong email or password" }, status: :unauthorized
        end
    end

    # Logout (destroy session)
    def destroy
        session.delete :user_id
        render json: { message: "Logged Out"}
    end

end
