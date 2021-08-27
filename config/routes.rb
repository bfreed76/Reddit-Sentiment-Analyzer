Rails.application.routes.draw do
  resources :search_results
  resources :authors
  resources :subreddits
  resources :search_terms
  resources :results_joins
  resources :user_posts
  resources :users
  # Remember to restrict routes as a last step!

  get '/me', to: 'users#me'
  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#signup'
  delete '/logout', to: 'users#logout'

end
