class User < ApplicationRecord
    has_secure_password
    has_many :red_flag_records
    has_many :intervention_records

    enum user_type: { user: 0, admin: 1 }
        
      
      
end

