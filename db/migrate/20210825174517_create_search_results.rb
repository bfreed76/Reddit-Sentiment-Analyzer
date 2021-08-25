class CreateSearchResults < ActiveRecord::Migration[6.1]
  def change
    create_table :search_results do |t|
      t.integer :result_id
      t.text :result_text
      t.float :anger
      t.float :disgust
      t.float :fear
      t.float :joy
      t.float :sadness
      t.timestamps
    end
  end
end
