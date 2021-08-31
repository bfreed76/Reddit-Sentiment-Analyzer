class User < ApplicationRecord
    has_secure_password
    
    has_many :user_posts
    has_many :results_joins
    has_many :search_results, through: :results_joins
    
    validates :username, :email, presence: true
    validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP
end
