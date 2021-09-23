class FallbackController < ActionController::Base

  # Fallback route 
  
    def index
      render file: 'public/index.html'
    end
  end 