class OrderSerializer < ActiveModel::Serializer
  belongs_to :resturant
  has_many :products
  
  attributes :id, :check_number, :resturant_id, :product_id
end
