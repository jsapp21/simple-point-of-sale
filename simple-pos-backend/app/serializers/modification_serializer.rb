class ModificationSerializer < ActiveModel::Serializer
  has_many :products

  attributes :id, :name, :product_id
end
