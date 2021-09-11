class RenameColumn < ActiveRecord::Migration[6.1]
  def change
    rename_column :search_results, :anger, :emo_doc
  end
end
