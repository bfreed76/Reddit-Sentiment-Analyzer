# Purpose: Create an app that allows users to search Reddit topics/keywords and apply sentiment analysis to those topics. App should present data in such a way that users can associate general Reddit user sentiment for input keywords/topics.

# External APIs:

    1. Use pushshift API to search Reddit.
    2. Sentiment Analysis
        VaderSentiment-js (JS)
        Sentimentalizer (Ruby Gem)
        IBM Watson: 2500 calls/mo
        AWS Comprehend: 5M chars/mo

# Summary: An intuitive, easy-to-use app that allows users to understand the general sentiment of Reddit comments and submissions containing user-defined keywords or keyword phrases.

# User Stories:

    As a user, I want to...

        Easily enter search terms with which to receive sentiment analysis on
        View an overall sentiment score as well as scores on individual comments/subreddits for any search
        Easily modify the date range of my searches to get an historical perspective

        Register and login to view my search results history
        Save my search results to my profile (update button)
        View the results of other users’ search results so that I can generate new ideas for search terms
        View all historical searches by sentiment score to easily discover the highest/lowest rated searches

        Search by user (such as top 20 posters, most popular, etc), all of Reddit, or a specific subreddit
        I can search with empty search fields to get a chronologically-ordered overall score from Reddit, a subreddit or user

        (stretch) enter a search term and, if desired, and additional search term to assist me in comparing terms
        (stretch) view chart of results for the same search terms over time
        (stretch) view a feed with new/top-rated search results at any time
        (stretch) 'like' posts from other users in order to place them higher in the feed or on search page
        (stretch) View the sentiment history of any search term using a custom date range
        (stretch) Follow a link in the results to each comment or submission returned for my search terms

# UX Research goals:

    ID user goals
        purchase decisions
        insight
        etc
    ID platform users browse reddit on
        Mobile vs.
        Desktop
    Disc. how users perform sent analysis without tools
        Includes subconscious analysis
    Understand what they do with the results
        Cool, move on
        Share?

# Models

    user
    user_post
    result_join
    search_term
    subreddit
    author
    search_results
    (stretch) likes