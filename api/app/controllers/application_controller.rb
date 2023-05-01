class ApplicationController < ActionController::API
    include ActionController::Cookies
  
    # def authorize
    #   if session[:user_id].present?
    #     @current_user = User.find_by(id: session[:user_id])
    #   else
    #     render json: { errors: ["Not authorized"] }, status: :unauthorized
    #   end
    # end
    
    

    # private

  #   def current_user
  #     @current_user ||= User.find(session[:user_id]) if session[:user_id]
  #   end

  #   def authorize
  #     unless current_user
  #       render json: { error: "You are not logged in" }, status: :unauthorized
  #   end
  # end


  # hash data into web token
  def encode(uid, email)
    payload = {
        data: {
            uid: uid,
            email: email,
            role: 'admin'
        },
    }
    JWT.encode(payload, 'jiseti' , 'HS256')
    end

    # unhash the token
    def decode(token)
        JWT.decode(token, 'jiseti' , true, { algorithm: 'HS256' })
    end

    # verify authorization headers
    def verify_auth
        auth_headers = request.headers['Authorization']
        if !auth_headers
            render json: {message: "You are not authorized"}, status: :unauthorized
        else
            token = auth_headers.split(' ')[1]
            save_user_id(token)
        end
    end

    # save user's id
    def save_user_id(token)
        @uid = decode(token)[0]["data"]["uid"].to_i
        save_user(@uid)
    end

    def save_user(uid)
        session[:user_id] = uid
    end

    # delete user id in session
    def remove_user
        set_user_offline
        session.delete(:user_id)
        render json: { message: "Logged out successfully"}
    end
    # get logged in user
    def current_user
        user_now ||= User.find_by(id: session[:user_id])
    end
    # verify authorization headers
    def verify_auth
        auth_headers = request.headers['Authorization']
        if !auth_headers
            render json: auth_headers
        else
            token = auth_headers.split(' ')[1]
            save_user_id(token)
        end
    end

  end
  