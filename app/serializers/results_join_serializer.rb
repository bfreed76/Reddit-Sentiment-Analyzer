class ResultsJoinSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :search_term_id, :subreddit_id, :author_id, :days_before, :days_after, :created_at

  belongs_to :user
  belongs_to :search_term
  belongs_to :subreddit
  belongs_to :author
  has_many :search_results
end
