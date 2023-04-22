class ApplicationController < ActionController::API
    include ActionController::Cookies
  
    def authorize
      @current_user = User.find_by(id: session[:user_id])
  
      if @current_user.nil?
        if request.headers["Authorization"].present?
          token = request.headers["Authorization"].split(" ").last
          payload = JWT.decode(token, Rails.application.secret_key_base, true, { algorithm: "HS256" }).first
          @current_user = User.find_by(id: payload["user_id"])
        end
      end
  
      render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    end

    private

    def current_user
      @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end

    def authorize
      redirect_to login_url, alert: "Not authorized" if current_user.nil?
    end
  end
  