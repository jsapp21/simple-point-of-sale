class ModificationSerializer < ActiveModel::Serializer
  belongs_to :product

  attributes :id, :name, :product_ID
end
