import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const AllNews = () => {
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-news")
      .then((res) => res.json())
      .then((data) => setAllNews(data));
  }, []);

  return (
    <div>
      <h3>Dragon News Home</h3>
      <div>
        {allNews.map((news) => (
          <NewsCard key={news._id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default AllNews;
