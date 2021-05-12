class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.integer :price
      t.integer :category_ID

      t.timestamps
    end
  end
end
