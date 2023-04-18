class User < ApplicationRecord
    #Associations
    has_many :red_flag_records
    has_many :intervention_records
     
end
