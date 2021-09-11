require 'httparty'

class GetReddit
  URL =
    'https://api.pushshift.io/reddit/search/comment/?q=science&subreddit=askscience'

  def get_reddit
    response = HTTParty.get(URL)
    puts response.parsed_response if response.code == 200
  end
end

data = GetReddit.new.get_reddit
puts data
