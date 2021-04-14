module API
  module V1
    class SpinsController < API::V1::ApplicationController
      def create
        result = Spins::Create.new(current_user).call

        case result
        when Success
          render json: result.value, status: :created
        else
          render json: { message: result.error }, status: :not_found
        end
      end

      def check_presence
        if current_user.premium_spins.positive?
          render json: { type: 'premium', count: current_user.premium_spins }
        elsif current_user.spins.free.where(created_at: Date.current.all_day).empty?
          render json: { type: 'free' }
        else
          render json: { message: 'No spin' }
        end
      end
    end
  end
end
