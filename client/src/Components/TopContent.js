import React, { useState, useEffect } from "react";
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
        setTopContent(data);
      })
      .catch((err) => console.log("error =", err));
  };

  return (
    <div>
      {topContent.map((item, id) => {
        return <TopContentCard key={id} item={item} />;
      })}
    </div>
  );
};

export default TopContent;
