class ProductSerializer < ActiveModel::Serializer
  belongs_to :category
  has_many :sizes
  has_many :ingredients
  # has_many :orders, :allergies, :modifications
  
  attributes :id, :name, :description
end
