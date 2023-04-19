class InterventionRecordsController < ApplicationController
  before_action :set_intervention_record, only: %i[ show update destroy ]
  # GET /intervention_records
  # GET /intervention_records.json
  def index
    @intervention_records = InterventionRecord.all
    respond_to do |format|
      format.json { render json: @intervention_records }
      format.html # Render HTML view
      format.xml { render xml: @intervention_records } # Render XML view
      # Add other formats as needed
    end
  end
  # GET /intervention_records/1
  # GET /intervention_records/1.json
  def show
  end

  # POST /intervention_records
  # POST /intervention_records.json
  def create
    @intervention_record = InterventionRecord.new(intervention_record_params)

    if @intervention_record.save
      render :show, status: :created, location: @intervention_record
    else
      render json: @intervention_record.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /intervention_records/1
  # PATCH/PUT /intervention_records/1.json
  def update
    if @intervention_record.update(intervention_record_params)
      render :show, status: :ok, location: @intervention_record
    else
      render json: @intervention_record.errors, status: :unprocessable_entity
    end
  end

  # DELETE /intervention_records/1
  # DELETE /intervention_records/1.json
  def destroy
    @intervention_record.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_intervention_record
      @intervention_record = InterventionRecord.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def intervention_record_params
      params.require(:intervention_record).permit(:user_id, :title, :description, :image_url, :latitude, :longitude, :status)
    end
end
