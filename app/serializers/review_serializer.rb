class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :date_time, :note, :user_id, :bakery_id
end
