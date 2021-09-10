class RenameColumn3 < ActiveRecord::Migration[6.1]
  def change
    rename_column :search_results, :fear, :emo_search

  end
end
