class ChangeColumn5 < ActiveRecord::Migration[6.1]
  def change
    change_column :search_results, :emo_search, :text
  end
end
