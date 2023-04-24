import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <div>
      <Link className="btn btn-link">{category.name}</Link>
    </div>
  );
};

export default Category;
