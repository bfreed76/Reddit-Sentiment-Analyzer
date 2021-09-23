module Api 

  class ApplicationController < ActionController::Base
    include ActionController::Cookies
    # Adding CSRF cookies for deployment to Heroku
    skip_before_action :verify_authenticity_token
    # after_action :set_csrf_cookie

    # Fallback route

    def fallback_index_html
      render file: 'public/index.html'
    end

    private

    # CSRF token creation for deployment to Heroku

    def set_csrf_cookie
      cookies["CSRF-TOKEN"] = {
        value: form_authenticity_token,
        secure: true,
        same_site: :strict,
        domain: 'reddit-emotion-analyzer.herokuapp.com/'}
        # p 'cookie  ****' + cookies["CSRF-TOKEN"]
    end

  end

end
