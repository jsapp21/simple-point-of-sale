class IngredientSerializer < ActiveModel::Serializer
  # has_many :allergies
  belongs_to :product

  attributes :id, :name, :product_id
end
