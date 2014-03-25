Blog::Application.routes.draw do
  resources :posts

  namespace :api do
    resources :posts, only: [:index, :show]
  end

  root :to => "home#index"
end
