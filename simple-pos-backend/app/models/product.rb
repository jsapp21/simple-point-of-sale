class Product < ApplicationRecord
    # has_many :orders, :allergies, :modifications
    belongs_to :category
    has_many :sizes
    has_many :ingredients
end
