class RenameColumn2 < ActiveRecord::Migration[6.1]
  def change
    rename_column :search_results, :disgust, :sent_doc
  end
end
