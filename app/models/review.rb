class Review < ApplicationRecord
    has_many :users
    has_many :bakeries
   
    belongs_to :user
    belongs_to :bakery
end
