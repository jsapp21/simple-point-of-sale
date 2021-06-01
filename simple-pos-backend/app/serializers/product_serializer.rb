class ProductSerializer < ActiveModel::Serializer
  belongs_to :category
  has_many :sizes
  # has_many :orders, :allergies, :ingredients, :modifications, :size
  
  attributes :id, :name, :description
end
