class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_response

    def index
        reviews = Review.all
        render json: reviews 
    end

    def show 
        review = Review.find(params[:id])
        render json:review
    end
    
    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end


    def destroy
        review = find_review
        review.destroy
        head :no_content
    end


        private

        def find_review
            Review.find(params[:id])
        end

        def review_params
            params.permit(:note, :user_id, :bakery_id)
        end

        def invalid_response(invalid)
            render json: {errors: "validation errors"}, status: :unprocessable_entity
        end
    
    
end
