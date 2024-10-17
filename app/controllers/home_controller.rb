class HomeController < ApplicationController
    def index
        @featured_products = Product.take(4)
        @main_categories = Category.all
    end
end