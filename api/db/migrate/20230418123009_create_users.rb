class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.text :username
      t.text :password_digest
      t.text :email
      t.integer :user_type

      t.timestamps
    end
  end
end
