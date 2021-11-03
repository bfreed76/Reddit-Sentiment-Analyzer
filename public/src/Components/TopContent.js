import React, { useState, useEffect } from "react";
import TopContentCard from "./TopContentCard";

const TopContent = () => {
  const [topContent, setTopContent] = useState([]);

  // Fetches most recent content on component render

  useEffect(() => {
    getTopContent();
  }, []);

  const getTopContent = () => {
    fetch("/api/top_content")
      .then((res) => res.json())
      .then((data) => {
        setTopContent(data);
      })
      .catch((err) => console.log("error =", err));
  };

  // Renders recent content cards

  return (
    <div>
      {topContent.map((item, id) => {
        return <TopContentCard key={id} item={item} />;
      })}
    </div>
  );
};

export default TopContent;
