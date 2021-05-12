class IngredientSerializer < ActiveModel::Serializer
  has_many :products, :allergies

  attributes :id, :name, :product_id
end
