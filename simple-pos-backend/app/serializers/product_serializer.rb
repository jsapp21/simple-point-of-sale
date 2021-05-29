class ProductSerializer < ActiveModel::Serializer
  # has_many :orders, :allergies, :ingredients, :modifications, :size
  belongs_to :category
  
  attributes :id, :name, :description
end
