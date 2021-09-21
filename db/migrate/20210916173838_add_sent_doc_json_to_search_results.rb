class AddSentDocJsonToSearchResults < ActiveRecord::Migration[6.1]
  def change
    add_column :search_results, :sent_doc_json, :json
  end
end
