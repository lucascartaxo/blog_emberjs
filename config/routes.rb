Blog::Application.routes.draw do
  resources :posts

  namespace :api do
    resources :posts
  end

  root :to => "home#index"
end
