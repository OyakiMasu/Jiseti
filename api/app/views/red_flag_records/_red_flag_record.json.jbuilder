json.extract! red_flag_record, :id, :user_id, :title, :description, :image_url, :latitude, :longitude, :status, :created_at, :updated_at
json.url red_flag_record_url(red_flag_record, format: :json)
