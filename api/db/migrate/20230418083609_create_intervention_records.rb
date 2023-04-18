class CreateInterventionRecords < ActiveRecord::Migration[7.0]
  def change
    create_table :intervention_records do |t|
      t.integer :user_id
      t.text :title
      t.text :description
      t.string :image_url
      t.decimal :latitude
      t.decimal :longitude
      t.integer :status

      t.timestamps
    end
  end
end
