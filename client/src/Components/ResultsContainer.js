import React, {useContext} from 'react'
import { Context } from "../context/Context";

const ResultsContainer = () => {
    const { user, results } = useContext(Context);
    return (
        <div>
            RESULTS CARDS HERE
        </div>
    )
}

export default ResultsContainer
