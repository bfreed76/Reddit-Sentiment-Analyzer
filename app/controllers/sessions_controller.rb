class SessionsController < ApplicationController

    def create
        #login
        #if username and password, save userID is session hash
        user = User.find_by(username: params[:username])
        session[:user_id] = user.id
        render json: user
        #return json response with userID, username, etc
        #else status 401
    end

    def destroy
        #delete/logout
        #if user loggedin (id in session hash), remove userID from session hash, return empty response with HTTP code 204
        #if not logged in , return json response with 401
    end

end
