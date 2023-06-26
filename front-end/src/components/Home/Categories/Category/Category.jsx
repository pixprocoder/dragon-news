import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <div>
      <Link to={`/category`} className="btn btn-link">
        {category.name}
      </Link>
      {/* <span>{news?.length}</span> */}
    </div>
  );
};

export default Category;
