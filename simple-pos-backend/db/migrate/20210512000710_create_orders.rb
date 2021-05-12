class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.integer :check_number
      t.integer :resturant_id
      t.integer :product_id

      t.timestamps
    end
  end
end
