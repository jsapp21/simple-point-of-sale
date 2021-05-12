Rails.application.routes.draw do
  resources :categories
  resources :modifications
  resources :sizes
  resources :ingredients
  resources :allergies
  resources :products
  resources :orders
  resources :resturants
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
