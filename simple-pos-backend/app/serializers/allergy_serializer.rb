class AllergySerializer < ActiveModel::Serializer
  has_many :products, :ingredients

  attributes :id, :product_id, :name
end
