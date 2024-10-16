class CategoriesController < ApplicationController
    # def show
    #     @category = Category.find(params[:id])
    #     @products = @category.products
    #     # filtering maximum price and minimum price
    #     if params[:max].present?
    #       @products = @products.where("price <= ?", params[:max])
    #     end
    #     if params[:min].present?
    #       @products = @products.where("price >= ?", params[:min])
    #     end
    # end

    def show
        @category = Category.find(params[:id])
        @products = @category.products
    
        # Filtering based on price
        if params[:price].present?
          @products = @products.where("price <= ?", params[:price])
        end
    end
end