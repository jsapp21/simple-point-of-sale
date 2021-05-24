class AllergySerializer < ActiveModel::Serializer
  has_many :products
  has_many :ingredients, :through :products

  attributes :id, :name, :product_ID
end
