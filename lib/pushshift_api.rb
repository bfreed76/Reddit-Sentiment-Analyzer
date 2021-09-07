require 'httparty'

class GetReddit
    URL = "https://api.pushshift.io/reddit/search/comment/?q=science&subreddit=askscience"

    def get_reddit
        response = HTTParty.get(URL)
        if response.code == 200
            puts response.parsed_response
        end
    end

end

data = GetReddit.new.get_reddit
puts data