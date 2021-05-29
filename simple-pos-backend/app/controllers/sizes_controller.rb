class SizesController < ApplicationController
    skip_before_action :verify_authenticity_token    

    def index
        sizes = Size.all 

        render json: sizes
    end

    def create
        size = Size.create(size_params)

        render json: size
    end

    private

    def size_params
        params.require(:size).permit(:name, :price, :product_id)
    end

end
# need to fix the tables price to a float