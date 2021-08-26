class User < ApplicationRecord
    has_many :user_posts
    has_many :results_joins
    has_many :search_results, through: :results_joins
    
    has_secure_password

    validates :username, presence: true
    validates :email, presence: true
    validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP
end
