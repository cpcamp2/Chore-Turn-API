Rails.application.routes.draw do
  get 'welcome/index'
    resources :chores
    resources :households

    root 'welcome#index'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'
end
