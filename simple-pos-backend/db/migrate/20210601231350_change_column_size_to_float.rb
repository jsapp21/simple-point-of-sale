class ChangeColumnSizeToFloat < ActiveRecord::Migration[6.1]
  def change
    change_column :sizes, :price, :float
  end
end
