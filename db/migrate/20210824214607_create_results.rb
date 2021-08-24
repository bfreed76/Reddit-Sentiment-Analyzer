class CreateResults < ActiveRecord::Migration[6.1]
  def change
    create_table :results do |t|
      t.int :user_ID
      t.text :search_results
      t.datetime :search_start_datetime
      t.datetime :search_end_datetime
      t.timestamps
    end
  end
end
