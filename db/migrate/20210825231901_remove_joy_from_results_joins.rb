class RemoveJoyFromResultsJoins < ActiveRecord::Migration[6.1]
  def change
    remove_column :results_joins, :joy, :float
  end
end
