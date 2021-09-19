
import React, { useState, useEffect } from "react";
import { Card, Feed } from "semantic-ui-react";
import TopContentCard from "./TopContentCard";

const MySearches = () => {
    // const [mySearches, setMySearches] = useState([]);

    // useEffect(() => {
    //   getMySearches();
    // }, []);
  
    // const getMySearches = () => {
    //   fetch("/my_searches")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log("My Searches: ", data);
    //       setMySearches(data);
    //     })
    //     .catch((err) => console.log("error =", err));
    // };
  
    return (
      <div> 
          <h1>HERE</h1>
          //ALL DATA STORED IN USER
        {/* {mySearches.map((item) => {
         return <TopContentCard item={item} />
        })} */}
      </div>
    );
  };

export default MySearches
