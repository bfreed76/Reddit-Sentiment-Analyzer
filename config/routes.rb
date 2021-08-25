Rails.application.routes.draw do
  resources :search_results
  resources :authors
  resources :subreddits
  resources :search_terms
  resources :results_joins
  resources :user_posts
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
