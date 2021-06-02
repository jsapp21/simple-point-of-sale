class IngredientsController < ApplicationController
    skip_before_action :verify_authenticity_token    

    def index
        ingredients = Ingredient.all 

        render json: ingredients
    end

    def create
        ingredient = Ingredient.create(ingredient_params)

        render json: ingredient
    end

    private

    def ingredient_params
        params.require(:ingredient).permit(:name, :product_id)
    end
end
