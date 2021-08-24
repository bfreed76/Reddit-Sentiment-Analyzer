class CreateUserPosts < ActiveRecord::Migration[6.1]
  def change
    create_table :user_posts do |t|
      t.int :user_id
      t.string :postContent
      t.int :sScore
      t.timestamps
    end
  end
end
