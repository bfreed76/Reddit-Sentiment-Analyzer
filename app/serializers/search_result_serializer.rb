class SearchResultSerializer < ActiveModel::Serializer
  attributes :id, :result_text, :anger, :disgust, :fear, :joy, :sadness
end
