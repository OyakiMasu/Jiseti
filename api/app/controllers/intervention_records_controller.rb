class InterventionRecordsController < ApplicationController
        #Authorization
        # before_action :authorize, only: [:create, :update, :destroy]
        # before_action :authorize_unauthenticated, only: [:index, :show]
        before_action :verify_auth, only: [:create]

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    # GET /intervention_records
    def index
        intervention_records = InterventionRecord.all 
        render json: intervention_records, status: :ok
        
    end

    # SHOW /intervention_records/:id
    def show
        intervention_records= InterventionRecord.find(params[:id])
        render json: intervention_records, status: :ok   

    end

    # # POST /intervention_records
    # def create
    #     intervention_record = InterventionRecord.new(intervention_record_params)
    #         intervention_record.user = current_user
    #     if intervention_record.save
    #         render json: intervention_record, status: :created
    #     else
    #         render json: { errors: intervention_record.errors.full_messages }, status: :unprocessable_entity
    #     end
    # end

    def create
      intervention_record = InterventionRecord.create(intervention_record_params)
      if @current_user
        intervention_record.user  = @current_user
      end
  
      if intervention_record.save
        render json: intervention_record, status: :created
      else
        render json: { error: intervention_record.errors.full_messages }, status: :unprocessable_entity
      end
    end
      
    # PATCH /intervention_records/:id/ User
    # def update
    #   intervention_record = InterventionRecord.find(params[:id])
    #   if current_user.admin? # check if current user is an admin
    #     if intervention_record.update(intervention_record_params)
    #       render json: intervention_record
    #     else
    #       render json: { errors: intervention_record.errors.full_messages }, status: :unprocessable_entity
    #     end
    #   else # if the user is not an admin, disallow update to the status attribute
    #     if intervention_record_params.key?(:status)
    #       render json: { error: "Only admin users can update status" }, status: :unprocessable_entity
    #     else
    #       if intervention_record.update(intervention_record_params)
    #         render json: intervention_record
    #       else
    #         render json: { errors: intervention_record.errors.full_messages }, status: :unprocessable_entity
    #       end
    #     end
    #   end
    # end


  def update
  intervention = InterventionRecord.find_by(id: params[:id])

    # if !current_user
    #   render json: {message: "You must be logged in to peform this action"}
    #   return
    # end
    if !intervention
      render json: {message: "Record not found"}, status: :not_found
      return
    end

    if intervention.update(intervention_record_params)
      render json: {message: "Updated successfully"}, status: :ok
    else
      render json: {message: "Failed"}, status: :unprocessable_entity
    end

  end
    


      def destroy
        intervention_record = InterventionRecord.find(params[:id])
        
        if current_user.admin?
          intervention_record.destroy 
          head :no_content
        else
          render json: { error: "Only admin users can delete intervention records" }, status: :forbidden
        end
      end
     
     private

     def intervention_record_params
        params.require(:intervention_record).permit(:title, :description, :latitude, :longitude, :image_url, :user_id, :status)
    end
      

     def render_not_found_response
        render json: { error: "Intervention Record not found" }, status: :not_found
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
