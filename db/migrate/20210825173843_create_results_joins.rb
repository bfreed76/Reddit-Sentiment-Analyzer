class CreateResultsJoins < ActiveRecord::Migration[6.1]
  def change
    create_table :results_joins do |t|
      t.int :id
      t.int :user_id
      t.int :search_term_id
      t.int :subreddit_id
      t.int :author_id
      t.int :days_before
      t.int :days_after
      t.float :anger
      t.float :disgust
      t.float :fear
      t.float :joy
      t.float :sadness
      t.timestamps
    end
  end
end
