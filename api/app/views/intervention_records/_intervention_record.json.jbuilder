json.extract! intervention_record, :id, :user_id, :title, :description, :image_url, :latitude, :longitude, :status, :created_at, :updated_at
json.url intervention_record_url(intervention_record, format: :json)
