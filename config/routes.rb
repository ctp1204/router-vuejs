Rails.application.routes.draw do
  root "application#index"
  match "*path", to: "application#index", via: :all
  resources :cart, :path => "shopping-cart"
  resources :products
end
