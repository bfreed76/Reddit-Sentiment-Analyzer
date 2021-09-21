class ResultsJoin < ApplicationRecord
  has_many :search_results
  has_many :votes, :as => :votable

  belongs_to :user
  belongs_to :search_term
  belongs_to :subreddit
  belongs_to :author
end
