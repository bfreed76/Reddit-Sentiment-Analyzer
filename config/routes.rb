Rails.application.routes.draw do
    resources :search_results, only: [:index]
    resources :authors, only: [:index, :show]
    resources :subreddits, only: [:index, :show]
    resources :search_terms, only: [:index, :show]
    resources :results_joins, only: [:index, :show]
    resources :user_posts, only: [:index, :show]
    resources :users, only: [:index, :show]

    # Custom routes

    get '/searches', to: 'search_results#index'
    post '/reddit', to: 'search_results#get_reddit'

    get '/me', to: 'users#me'
    post '/signup', to: 'users#create'
    patch '/update', to: 'users#update'

    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'

    get '/top_content', to: 'results_joins#top_content'
    get '/my_searches', to: 'results_joins#my_searches'

    get "*path", to: "application#fallback_index_html", constraints: ->(req) { !req.xhr? && req.format.html? }
    
  end
