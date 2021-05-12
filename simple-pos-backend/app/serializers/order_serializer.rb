class OrderSerializer < ActiveModel::Serializer
  has_many :products
  belongs_to :resturant
  
  attributes :id, :check_number, :resturant_id, :product_id
end
