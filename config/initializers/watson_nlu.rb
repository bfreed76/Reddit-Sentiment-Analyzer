require "json"
require "ibm_watson/authenticators"
require "ibm_watson/natural_language_understanding_v1"

class WatsonAuth 
    include IBMWatson
    attr_reader :nlu

    def initialize
        authenticator = Authenticators::IamAuthenticator.new(
            apikey: ENV["NATURAL_LANGUAGE_UNDERSTANDING_APIKEY"]
            )
        # creates new instance of NLU
        natural_language_understanding = NaturalLanguageUnderstandingV1.new(
            version: "2021-08-01",
            authenticator: authenticator
            )
        # provides service URL
        natural_language_understanding.service_url = ENV["NATURAL_LANGUAGE_UNDERSTANDING_URL"]
        # Assigns analysis of res to response variable

        @nlu = natural_language_understanding
    end

end