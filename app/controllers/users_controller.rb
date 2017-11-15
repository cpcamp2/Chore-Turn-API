class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user, :status => 200
    else
      render json: {errors: user.errors.full_messages, status: 404}
    end
  end

  private
    def user_params
      params.require(:user).permit(:email, :username, :first_name, :last_name, :password)
    end
end
