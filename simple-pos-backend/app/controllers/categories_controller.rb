class CategoriesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        byebug
        categories = Categories.all 

        render json: categories
    end 

    def create
        byebug
        category = Categories.create(name: params[:name])

        render json: category
    end

end
