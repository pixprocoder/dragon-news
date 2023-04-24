import React, { useEffect, useState } from "react";
import Category from "./Category/Category";

const Categories = () => {
  const [catagories, setCategories] = useState([]);
  console.log(catagories);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h3>All Category</h3>
      <div>
        {catagories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
