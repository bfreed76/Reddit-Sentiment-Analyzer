class AddEmoSearchJsonToSearchResults < ActiveRecord::Migration[6.1]
  def change
    add_column :search_results, :emo_search_json, :json
  end
end
