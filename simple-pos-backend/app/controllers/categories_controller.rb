class CategoriesController < ApplicationController

    def index
        categories = Category.all 

        render json: categories
    end 

    def create
        category = Category.find_or_create_by(category_params)

        render json: category
    end

    private

    def category_params
        params.require(:category).permit(:name)
    end


end
