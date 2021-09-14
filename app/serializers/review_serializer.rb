class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :date_time, :note, :user_id, :bakery_id
  has_many :users
  has_many :bakeries

end
