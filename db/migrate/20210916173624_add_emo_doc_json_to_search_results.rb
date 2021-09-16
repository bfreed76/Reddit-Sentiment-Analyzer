class AddEmoDocJsonToSearchResults < ActiveRecord::Migration[6.1]
  def change
    add_column :search_results, :emo_doc_json, :json
  end
end
