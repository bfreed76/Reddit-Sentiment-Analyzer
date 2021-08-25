class UserPostSerializer < ActiveModel::Serializer
  attributes :id, :post_content, :anger, :disgust, :fear, :joy, :sadness

  belongs_to :user
end
