class ChangeColumn4 < ActiveRecord::Migration[6.1]
  def change
    change_column :search_results, :emo_doc, :text
  end
end
