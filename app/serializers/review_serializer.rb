class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :date_time, :note, :user_id, :bakery_id
  belongs_to :user
  belongs_to :bakery

end
