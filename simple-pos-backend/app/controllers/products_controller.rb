class ProductsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        products = Product.all 

        render json: products
    end 

    def create
        byebug
        product = Product.create(product_params, category_ID: @category_id)

        render json: product
    end

    private

    def product_params
        params.require(:product).permit(:name, :description, :price)
    end

end
