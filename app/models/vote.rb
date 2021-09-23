    class Vote < ActiveRecord::Base

      # Created for vote function that was not implimented pre-production
      
      belongs_to :user
      belongs_to :votable, :polymorphic =>true
      validates :votable_type, :votable_id, :presence => true
    end
