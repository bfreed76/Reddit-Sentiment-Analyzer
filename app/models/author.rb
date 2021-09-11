class Author < ApplicationRecord
  has_many :result_joins
  has_many :search_results, through: :results_join
end
