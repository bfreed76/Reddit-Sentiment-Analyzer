class RemoveAngerFromResultsJoins < ActiveRecord::Migration[6.1]
  def change
    remove_column :results_joins, :anger, :float
  end
end
