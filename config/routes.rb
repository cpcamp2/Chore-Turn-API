Rails.application.routes.draw do
  get 'welcome/index'
    resources :chores
    resources :households

    root 'welcome#index'
end
