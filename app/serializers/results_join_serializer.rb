class ResultsJoinSerializer < ActiveModel::Serializer
  attributes :id, :days_before, :days_after

  belongs_to :user
  belongs_to :search_term
  belongs_to :subreddit
  belongs_to :author
  has_many :search_results
end
