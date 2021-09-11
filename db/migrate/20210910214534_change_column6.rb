class ChangeColumn6 < ActiveRecord::Migration[6.1]
  def change
    change_column :search_results, :sent_doc, :text
  end
end
