Rails.application.routes.draw do
  root 'welcome#index'

  get 'welcome/index'
  get '/households', to: "households#index"
  resources :households do
    get '/users/user_id/chores', to: 'households/users/chores#index'
      resources :chores do
        get '/users', to: "chores/users#index"
      end
  end


  # get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  # get '/login', to: 'sessions#destroy'
  post '/users', to: 'users#create'
end
