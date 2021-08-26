class FixColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :search_results, :result_id, :results_joins_id
  end
end
