class CreateSizes < ActiveRecord::Migration[6.1]
  def change
    create_table :sizes do |t|
      t.string :name
      t.integer :product_ID

      t.timestamps
    end
  end
end
