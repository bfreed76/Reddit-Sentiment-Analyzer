import { Context } from "../context/Context";
import React, { useState, useEffect, useContext } from "react";
import { Card, Feed } from "semantic-ui-react";
import TopContentCard from "./TopContentCard";
import MySearchCards from "./MySearchCards";

const MySearches = () => {
    const { user } = useContext(Context);
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

    // debugger

    return (
      <div> 
        {mySearches.map((item) => {
         return <MySearchCards item={item} />
        })}
      </div>
    );
  };

export default MySearches
