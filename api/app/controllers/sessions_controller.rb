class SessionsController < ApplicationController

    # before_action :authorize, only: [:index, :show]

    #Login
    def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: { errors: "Invalid username or password" }, status: :unauthorized
        end
    end

    #Logout
    def destroy
        session.delete :user_id
        head :no_content
    end
    
end
