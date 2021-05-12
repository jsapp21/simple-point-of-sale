class ProductSerializer < ActiveModel::Serializer
  has_many :orders, :allergies, :ingredients, :modifications, :sizes

  attributes :id, :name, :description, :price, :category_id
end
