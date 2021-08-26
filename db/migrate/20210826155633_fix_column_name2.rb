class FixColumnName2 < ActiveRecord::Migration[6.1]
  def change
    rename_column :search_results, :results_joins_id, :results_join_id
  end
end
