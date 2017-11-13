class ChoresController < ApplicationController
  def index
    @chores = Chore.all
    render json: @chores
  end

  def show
    @chore = Chore.find(params[:id])
  end

  def new
    @chore = Chore.new
  end

  def edit
    @chore = Chore.find(params[:id])
  end

  def create
    @chore = Chore.new(chore_params)
    @chore.household_id = params[:household_id]
    byebug
    if @chore.save
      render json: @chore, :status => 200
    else
      render json: {errors: @chore.errors.full_messages}
    end
  end

  def update
    @chore = Chore.find(params[:id])
    if @chore.update(chore_params)
      render json: @chore, :status => 200
    else
      render json: {errors: @chore.errors.full_messages}
    end
  end

  def destroy
    @chore = Chore.find(params[:id])
    @chore.destroy
  end

  private
  def chore_params
    params.require(:chore).permit(:id, :name, :duration, :status, :date)
  end
end
