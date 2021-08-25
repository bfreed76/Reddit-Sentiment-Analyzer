class RemoveFearFromResultsJoins < ActiveRecord::Migration[6.1]
  def change
    remove_column :results_joins, :fear, :float
  end
end
