class RedFlagRecordsController < ApplicationController
  before_action :set_red_flag_record, only: %i[ show update destroy ]

  # GET /red_flag_records
  # GET /red_flag_records.json
  def index
    @red_flag_records = RedFlagRecord.all
  end

  # GET /red_flag_records/1
  # GET /red_flag_records/1.json
  def show
  end

  # POST /red_flag_records
  # POST /red_flag_records.json
  def create
    @red_flag_record = RedFlagRecord.new(red_flag_record_params)

    if @red_flag_record.save
      render :show, status: :created, location: @red_flag_record
    else
      render json: @red_flag_record.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /red_flag_records/1
  # PATCH/PUT /red_flag_records/1.json
  def update
    if @red_flag_record.update(red_flag_record_params)
      render :show, status: :ok, location: @red_flag_record
    else
      render json: @red_flag_record.errors, status: :unprocessable_entity
    end
  end

  # DELETE /red_flag_records/1
  # DELETE /red_flag_records/1.json
  def destroy
    @red_flag_record.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_red_flag_record
      @red_flag_record = RedFlagRecord.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def red_flag_record_params
      params.require(:red_flag_record).permit(:user_id, :title, :description, :image_url, :latitude, :longitude, :status)
    end
end
