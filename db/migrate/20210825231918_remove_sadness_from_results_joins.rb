class RemoveSadnessFromResultsJoins < ActiveRecord::Migration[6.1]
  def change
    remove_column :results_joins, :sadness, :float
  end
end
