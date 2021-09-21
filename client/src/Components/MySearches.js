import React, { useState, useEffect } from "react";
import MySearchCards from "./MySearchCards";

const MySearches = () => {
  const [mySearches, setMySearches] = useState([]);

  useEffect(() => {
    getMySearches();
  }, []);

  const getMySearches = () => {
    fetch("/my_searches")
      .then((res) => res.json())
      .then((data) => {
        console.log("My Searches: ", data);
        setMySearches(data);
      })
      .catch((err) => console.log("error =", err));
  };

  return (
    <div>
      {mySearches.length > 1 ? (
        mySearches.map((item, id) => {
          return <MySearchCards key={id} item={item} />;
        })
      ) : (
        <h3 style={{ color: "red" }}>No search results available</h3>
      )}
    </div>
  );
};

export default MySearches;
