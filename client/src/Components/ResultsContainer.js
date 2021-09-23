import React, { useContext } from "react";
import { Context } from "../context/Context";
import ResultsHeader from "./ResultsHeader";
import ResultsCard from "./ResultsCard";

const ResultsContainer = () => {
  const { results } = useContext(Context);

  // Renders results header and results cards with error handling

  return (
    <div className='results'>
      {!!results ? (
        <div>
          <ResultsHeader />
          {results.data.map((result, id) => {
            return <ResultsCard key={id} result={result} />;
          })}
        </div>
      ) : (
        <h3>Results not available. Please try your search again. </h3>
      )}
    </div>
  );
};

export default ResultsContainer;
