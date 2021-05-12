class CreateModifications < ActiveRecord::Migration[6.1]
  def change
    create_table :modifications do |t|
      t.string :name
      t.integer :price
      t.integer :product_ID

      t.timestamps
    end
  end
end
