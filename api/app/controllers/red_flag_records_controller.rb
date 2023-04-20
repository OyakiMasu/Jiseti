class RedFlagRecordsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    # GET/red_flag_records
    def index
        red_flag_records = RedFlagRecord.all 
        render json: red_flag_records, status: :ok
    end

    # SHOW /foods/:id
    def show
        red_flag_records = RedFlagRecord.find(params[:id])
        render json: red_flag_records, status: :ok
     end

    #POST /red_flag_records
    def create
        red_flag_record = RedFlagRecord.create(red_flag_record_params)
        if red_flag_record.save
            render json: red_flag_record
        else
            render json: { error: red_flag_record.errors.full_messages.to_sentence }
        end
              
    end

    # PATCH/ red_flag_records
    def update
        red_flag_record = RedFlagRecord.find(params[:id])
        if red_flag_record.update(red_flag_record_params)
            render json: red_flag_record
        else
            render json: { errors: red_flag_record.errors.full_messages }, status: :unprocessable_entity
        end
    end

    # DELETE/ red_flag_records
    def destroy
        red_flag_record = RedFlagRecord.find(params[:id])
        red_flag_record.destroy
        head :no_content
    end
         
    private

    def  red_flag_record_params
        params.require(:red_flag_record).permit(:title, :description, :latitude, :longitude, :image_url, :user_id)
    end
          
    
    def render_not_found_response
        render json: { error: "RedFlag Record not found" }, status: :not_found
    end
        
    def render_unprocessable_entity
        render json: { error: "Validity errors" }, status: :unprocessable_entity
    end
    


end
