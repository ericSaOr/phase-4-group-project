class Review < ApplicationRecord
    has_many :users
    has_many :bakeries
    belongs_to :bakery
    belongs_to :user
end
