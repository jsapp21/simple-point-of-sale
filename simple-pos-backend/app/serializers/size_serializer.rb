class SizeSerializer < ActiveModel::Serializer
  belongs_to :product

  attributes :id, :name, :price, :product_id
end
