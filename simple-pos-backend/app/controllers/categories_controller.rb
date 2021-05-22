class CategoriesController < ApplicationController
    skip_before_action :verify_authenticity_token
    helper_method :category_id

    def index
        categories = Category.all 

        render json: categories
    end 

    def create
        category = Category.find_or_create_by(category_params)
        # byebug

        render json: category
        category_id(category[:id])
    end

    private

    def category_params
        params.require(:category).permit(:name)
    end


end
