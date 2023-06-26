import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { useLoaderData } from "react-router-dom";

const AllNews = () => {
  const allNews = useLoaderData();

  return (
    <div>
      <h3>Dragon News Home: {allNews.length}</h3>
      <div>
        {allNews.map((news) => (
          <NewsCard key={news._id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default AllNews;
