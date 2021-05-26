class ProductsController < ApplicationController
    skip_before_action :verify_authenticity_token    

    def index
        products = Product.all 

        render json: products
    end 

    def create
        product = Product.find_or_create_by(product_params)

        render json: product
    end

    private

    def product_params
        params.require(:product).permit(:name, :description, :category_id)
    end

end
