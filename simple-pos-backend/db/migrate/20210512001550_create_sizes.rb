class CreateSizes < ActiveRecord::Migration[6.1]
  def change
    create_table :sizes do |t|
      t.string :name
      t.integer :price
      t.integer :product_id

      t.timestamps
    end
  end
end
