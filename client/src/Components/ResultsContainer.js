import React, {useContext} from 'react'
import { Context } from "../context/Context";

const ResultsContainer = () => {
    const { user, results } = useContext(Context);
    
    debugger
    
    return (
        <div>
            RESULTS CARDS HERE
            {/* 
            (Header)
            results.user
            user.results_joins[user.results_joins.length-1].created_at
            results.author.name
            results.subreddit.name
            results.searchTerms.search_term  (check for search terms)
            results.sentimentDocument
            results.emotionDocument
            results.emotionTarget

            (Cards)
            results.data[1].author
            results.data[1].body
            results.data[1].score
            results.data[1].created_utc
            */}
        </div>
    )
}

export default ResultsContainer
