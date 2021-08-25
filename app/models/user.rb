class User < ApplicationRecord
    has_many :user_posts
    has_many :result_joins
    has_many :search_results, through: :result_join
    
    has_secure_password
end
