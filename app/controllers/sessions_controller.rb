class SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by_email(params[:user][:email])
    if @user && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
       render json: @user
    else
      if @user
        render json: {"errors" => "ERROR!"}
      else
        render json: {"errors" => "ERROR!"}
      end
    end
  end

  def destroy
    session.clear
  end

end
