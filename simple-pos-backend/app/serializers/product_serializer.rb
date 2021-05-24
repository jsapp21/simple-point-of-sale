class ProductSerializer < ActiveModel::Serializer
  # has_many :orders, :allergies, :ingredients, :modifications, :sizes
  belongs_to :category
  
  attributes :id, :name, :description, :price, :category_ID
end
