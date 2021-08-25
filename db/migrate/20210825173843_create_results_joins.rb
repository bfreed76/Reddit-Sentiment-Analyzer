class CreateResultsJoins < ActiveRecord::Migration[6.1]
  def change
    create_table :results_joins do |t|
      t.integer :user_id
      t.integer :search_term_id
      t.integer :subreddit_id
      t.integer :author_id
      t.integer :days_before
      t.integer :days_after
      t.float :anger
      t.float :disgust
      t.float :fear
      t.float :joy
      t.float :sadness
      t.timestamps
    end
  end
end
