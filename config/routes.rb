Rails.application.routes.draw do
  get 'users/new'

  get 'welcome/index'
    resources :households do
      get '/users/user_id/chores', to: 'households/users/chores#index'
      resources :chores do
        get '/users', to: "chores/users#index"
      end
    end

    root 'welcome#index'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'
end
