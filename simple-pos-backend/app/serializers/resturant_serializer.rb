class ResturantSerializer < ActiveModel::Serializer
  has_many :orders
  has_many :products, through: :orders

  attributes :id, :name
end
