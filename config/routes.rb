Rails.application.routes.draw do
  root 'welcome#index'

  get 'welcome/index'
  resources :households do
    get '/users/user_id/chores', to: 'households/users/chores#index'
      resources :chores do
        get '/users', to: "chores/users#index"
      end
  end

  post '/users', to: 'users#create'
end
