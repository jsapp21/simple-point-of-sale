class Product < ApplicationRecord
    # has_many :orders, :allergies, :ingredients, :modifications, :sizes
    belongs_to :category
    has_many :sizes
end
