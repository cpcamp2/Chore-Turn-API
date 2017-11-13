class HouseholdsController < ApplicationController
  def index
    @households = Household.all
    render json: @households
  end

  def show
    @household = Household.find(params[:id])
  end

  def new
    @household = Household.new
    render json: @household
  end

  def edit
    @household = Household.find(params[:id])
  end

  def create
    @household = Household.new(household_params)
    # binding.pry
    if @household.save
      render json: @household, :status => 200
    else
      p 
      render json: {errors: @household.errors.full_messages}
    end
  end

  def update
    @household = Household.find(params[:id])
    if @household.update(household_params)
      redirect_to @household
    else
      render 'edit'
    end
  end

  def destroy
    @household = Household.find(params[:id])
    @household.destroy

    redirect_to households_path
  end

  private
  def household_params
    params.require(:household).permit(:id, :name, :address, :city, :state, :zip_code)
  end
end
