class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email

  has_many :user_posts
  has_many :results_joins
  has_many :search_results, through: :results_joins
end
