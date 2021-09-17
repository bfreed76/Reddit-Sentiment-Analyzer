Rails
  .application
  .routes
  .draw do
    resources :search_results
    resources :authors
    resources :subreddits
    resources :search_terms
    resources :results_joins
    resources :user_posts
    resources :users

    # Remember to restrict routes as a last step!

    get '/searches', to: 'search_results#index'

    get '/me', to: 'users#me'
    post '/signup', to: 'users#create'

    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'

    post '/reddit', to: 'search_results#get_reddit'

    get '/top_content', to: 'results_joins#top_content'
    # get '/top_content', to: 'search_results#top_content'
  end
