class ProductsController < ApplicationController
    def index
        @products = Product.all

        # Filtering based on price
      if params[:price].present?
        @products = @products.where("price <= ?", params[:price])
      end
    end

    def show
      @product = Product.find(params[:id])      
    end
end