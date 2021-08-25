class RemoveDisgustFromResultsJoins < ActiveRecord::Migration[6.1]
  def change
    remove_column :results_joins, :disgust, :float
  end
end
