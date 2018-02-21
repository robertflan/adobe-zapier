Rails.application.routes.draw do
  get 'user/login'

  resources :profiles
  root 'index#index'
  get '/#',to: 'index#index'
  get 'login', to: 'user#login'
  get 'account', to: 'user#account'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
