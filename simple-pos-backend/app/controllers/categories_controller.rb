class CategoriesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        categories = Category.all 

        render json: categories
    end 

    def create
        # not sure if I need category in array - we will find out
        params[:category].each do |x|
            @category = Category.create(name: x[:name])
        end 

        render json: @category
    end


end
