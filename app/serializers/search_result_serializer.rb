class SearchResultSerializer < ActiveModel::Serializer
  attributes :id, :result_text, :results_join_id, :emo_doc_json, :sent_doc_json, :emo_search_json 

  belongs_to :results_join
end
