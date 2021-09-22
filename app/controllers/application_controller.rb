class ApplicationController < ActionController::Base
  include ActionController::Cookies
  # after_action :set_csrf_cookie
  skip_before_action :verify_authenticity_token

  def fallback_index_html
    render file: 'public/index.html'
  end

  private

  def set_csrf_cookie
    cookies["CSRF-TOKEN"] = {
      value: form_authenticity_token,
      secure: true,
      same_site: :strict,
      domain: 'reddit-emotion-analyzer.herokuapp.com/'}
      # p 'cookie  ****' + cookies["CSRF-TOKEN"]
  end

end
