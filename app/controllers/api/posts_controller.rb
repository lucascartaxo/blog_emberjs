class Api::PostsController < ApplicationController
  respond_to :json

  def index
    respond_with Post.all
  end

  def show
    respond_with Post.find(params[:id])
  end

  private

  def post_params
    params.require(:post).permit(:author, :content)
  end

end
