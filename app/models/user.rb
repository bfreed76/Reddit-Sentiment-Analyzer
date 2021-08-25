class User < ApplicationRecord
    has_many :user_posts
    has_many :result_joins
    has_many :search_results, through: :result_join
    
    has_secure_password

    validates :username, presence: true
    validates :email, presence: true
    validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP
end
