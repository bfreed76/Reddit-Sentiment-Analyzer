import React, { useState, useEffect } from "react";
import { Card, Feed } from "semantic-ui-react";
import TopContentCard from "./TopContentCard";

const TopContent = () => {
  const [topContent, setTopContent] = useState([]);

  useEffect(() => {
    getTopContent();
  }, []);

  const getTopContent = () => {
    fetch("/top_content")
      .then((res) => res.json())
      .then((data) => {
        console.log("Top Content: ", data);
          // setTopContent(data);
      })
      .catch((err) => console.log("error =", err));
  };
  return (
    <div>
      {topContent.map((item) => {
       return <TopContentCard item={item} />
      })}
    </div>
  );
};

export default TopContent;
