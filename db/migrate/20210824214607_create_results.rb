class CreateResults < ActiveRecord::Migration[6.1]
  def change
    create_table :results do |t|
      t.int :user_ID
      t.text :search_results
      t.float :sadness
      t.float :joy
      t.float :fear
      t.float :disgust
      t.float :anger
      t.datetime :search_start_datetime
      t.datetime :search_end_datetime
      t.timestamps
    end
  end
end
