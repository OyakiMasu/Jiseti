class CreateRedFlagRecords < ActiveRecord::Migration[7.0]
  def change
    create_table :red_flag_records do |t|
      t.integer :user_id
      t.text :title
      t.text :description
      t.text :image_url
      t.decimal :latitude, precision: 10, scale: 6
      t.decimal :longitude, precision: 10, scale: 6
      t.integer :status

      t.timestamps
    end
  end
end
