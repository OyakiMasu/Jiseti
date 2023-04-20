class UsersController < ApplicationController    
    # Handle ActiveRecord Not Found exception
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

# get all users /users
def index
    users = User.all
    render json: users
end

# GET /users/:id
def show
    user = User.find([:user_id])
    render json: user, status: :ok
end

#POST /users
def create
    user = User.create(user_params)
    if user.valid?
        session[:user_id] = user.id
        render json: user, status: :created
    else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
end

# PUT/ PATCH /users/:id
def update
    user = User.find(params[:id])
    if user
        User.update(user_params)
        render json: user, status: :created
    else
        render json: { error: "User not found" }, status: :unprocessable_entity
    end
end

# DELETE /USERS/:id
def destroy
    user = User.find(params[:id])
    if user 
        user.destroy 
        head :no_content
    else
        render json: { error: "User not found" }, status: :not_found
    end
end

private

# errors
def render_not_found_response
    render json: {errors: "User not found"}, status: :not_found
end

def user_params
    params.permit(:username, :email, :password)
end

end


