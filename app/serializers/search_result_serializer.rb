class SearchResultSerializer < ActiveModel::Serializer
  attributes :id, :result_text, :results_join_id, :emo_doc, :sent_doc, :emo_search 

  belongs_to :results_join
end
