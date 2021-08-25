class CreateUserPosts < ActiveRecord::Migration[6.1]
  def change
    create_table :user_posts do |t|
      t.integer :user_id
      t.string :post_content
      t.float :sadness
      t.float :joy
      t.float :fear
      t.float :disgust
      t.float :anger
      t.timestamps
    end
  end
end
