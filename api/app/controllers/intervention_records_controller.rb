class InterventionRecordsController < ApplicationController
    
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

     # POST /intervention_records
     def create
        intervention_record = InterventionRecord.create(intervention_record_params)
        if intervention_record.save
          render json: intervention_record
        else
            render json: { error: intervention_record.errors.full_messages.to_sentence }
        end
          
    end
      
    # PATCH /intervention_records/:id
    def update
        intervention_record = InterventionRecord.find(params[:id])
        if intervention_record.update(intervention_record_params)
            render json: intervention_record
        else
            render json: { errors: intervention_record.errors.full_messages }, status: :unprocessable_entity
        end
    end


    # DELETE/ intervention_records/:id
    def destroy
        intervention_record = InterventionRecord.find(params[:id])
        intervention_record.destroy
        head :no_content
    end
     
     private

     def intervention_record_params
        params.require(:intervention_record).permit(:title, :description, :latitude, :longitude, :image_url, :user_id)
    end
      

     def render_not_found_response
        render json: { error: "Intervention Record not found" }, status: :not_found
    end
    
    def render_unprocessable_entity
        render json: { error: "Validity errors" }, status: :unprocessable_entity
    end

end
