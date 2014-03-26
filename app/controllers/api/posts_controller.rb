class Api::PostsController < ApplicationController
  respond_to :json

  def index
    respond_with Post.all
  end

  def show
    respond_with Post.find(params[:id])
  end

  def create
    respond_with Post.create!(post_params)
  end

  def update
    respond_with Post.find(params[:id]).update(post_params)
  end

  def destroy
    respond_with Post.destroy(params[:id])
  end

  private

  def post_params
    params.require(:post).permit(:author, :body, :title)
  end

end
