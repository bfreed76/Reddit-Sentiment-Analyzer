class Subreddit < ApplicationRecord
  has_many :results_joins
  has_many :search_results, through: :results_join
end
