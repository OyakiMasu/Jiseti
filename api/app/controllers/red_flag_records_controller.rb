class RedFlagRecordsController < ApplicationController
    #Authorization
    # before_action :authorize, only: [:create, :update, :destroy]
    # before_action :authorize_unauthenticated, only: [:index, :show]

    before_action :verify_auth, only: [:create]


    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    # GET/red_flag_records
    def index
        red_flag_records = RedFlagRecord.all 
        render json: red_flag_records, status: :ok
    end

    # GET /red_flag_records/:id
    def show
        red_flag_records = RedFlagRecord.find(params[:id])
        render json: red_flag_records, status: :ok
     end
    
    # GET /red_flag_records/ intervention_records
    def all_records
        red_flag_records = current_user.red_flag_records
        intervention_records = current_user.intervention_records
        
        render json: {interventions: intervention_records, red_flag: red_flag_records}
    end



    # POST /red_flag_records
  def create
    red_flag_record = RedFlagRecord.new(red_flag_record_params)
    if @current_user
      red_flag_record.user = @current_user
    end

    if red_flag_record.save
      render json: red_flag_record, status: :created
    else
      render json: { error: red_flag_record.errors.full_messages }, status: :unprocessable_entity
    end
  end


  # PATCH/ red_flag_records
  # PATCH/ red_flag_records
  # def update
  #   red_flag_record = RedFlagRecord.find(params[:id])
  #    userLoggedIn = @current_user.nil
  #   # Check if current user is present
  #   if userLoggedIn
  #     render json: { error: "You must be logged in to perform this action" }, status: :unprocessable_entity
  #     return
  #   end
  
  #   # Check if the user making the update is the owner of the record being updated
  #   if !current_user.admin? && red_flag_record.user != current_user
  #     render json: { error: "You are not authorized to perform this action" }, status: :unprocessable_entity
  #     return
  #   end
  
  #   # Update the red flag record
  #   permitted_params = red_flag_record_params
  #   if !current_user.admin? && !permitted_params[:status].nil?
  #     render json: { error: "You are not authorized to update the status" }, status: :unprocessable_entity
  #     return
  #   end
  
  #   if red_flag_record.update(permitted_params)
  #     render json: red_flag_record
  #   else
  #     render json: { errors: red_flag_record.errors.full_messages }, status: :unprocessable_entity
  #   end
  # end

  def update
    redflag = RedFlagRecord.find_by(id: params[:id])

    # if !current_user
    #   render json: {message: "You must be logged in to peform this action"}
    #   return
    # end
    if !redflag
      render json: {message: "Record not found"}, status: :not_found
      return
    end

    if redflag.update(red_flag_record_params)
      render json: {message: "Updated successfully"}, status: :ok
    else
      render json: {message: "Failed"}, status: :unprocessable_entity
    end

  end



    # DELETE /red_flag_records/:id
    def destroy
        red_flag_record = RedFlagRecord.find(params[:id])
    
        if current_user.admin?
            red_flag_record.destroy 
            head :no_content
        else
            render json: { error: "Only admin users can delete red flag records" }, status: :unprocessable_entity
        end
    end
         
    private

    def  red_flag_record_params
        params.require(:red_flag_record).permit(:title, :description, :latitude, :longitude, :image_url, :user_id, :status)
    end
          
    
    def render_not_found_response
        render json: { error: "RedFlag Record not found" }, status: :not_found
    end
        
    def render_unprocessable_entity
        render json: { error: "Validity errors" }, status: :unprocessable_entity
    end
    
  #   def authorize_unauthenticated
  #     unless current_user
  #       render json: { error: "You are not logged in" }, status: :unauthorized
  #   end
  # end


end
