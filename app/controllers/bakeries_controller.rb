class BakeriesController < ApplicationController
    def index
        bakeries = Bakery.all
        render json: bakeries status: :ok
    end
end
