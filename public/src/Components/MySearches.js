import React, { useState, useEffect } from "react";
import TopContentCard from "./TopContentCard";

const MySearches = () => {
  const [mySearches, setMySearches] = useState([]);

  // Populates tab with most recent searches from all users

  useEffect(() => {
    getMySearches();
  }, []);

  const getMySearches = () => {
    fetch("/api/my_searches")
      .then((res) => res.json())
      .then((data) => {
        setMySearches(data);
      })
      .catch((err) => console.log("error =", err));
  };

  // Renders result cards

  return (
    <div>
      {mySearches.length > 1 ? (
        mySearches.map((item, id) => {
          return <TopContentCard key={id} item={item} />;
        })
      ) : (
        <h3>No search results available</h3>
      )}
    </div>
  );
};

export default MySearches;
