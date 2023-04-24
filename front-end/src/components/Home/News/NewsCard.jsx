import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";
import { BsEyeFill } from "react-icons/bs";

import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const NewsCard = ({ news }) => {
  console.log(news);
  const {
    title,
    image_url,
    total_view,
    details,
    author,
    rating,
    thumbnail_url,
  } = news;
  return (
    <div className="mb-4">
      <Card>
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <Image
                style={{ width: "50px", height: "50px" }}
                src={author.img}
                roundedCircle
              />
              <div className="ms-3">
                <h5 className="mb-0">{author.name}</h5>
                <p className="m-0">{author.published_date}</p>
              </div>
            </div>
            <div>
              <CiBookmark style={{ fontSize: "28px" }} />
              <CiShare2 style={{ fontSize: "28px" }} />
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <h2>{title}</h2>
          </Card.Title>
          <Image className="my-4" src={image_url} fluid />
          <Card.Text>{details}</Card.Text>
          <span className="btn btn-link  m-0 p-0">Read more</span>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between text-muted">
          <div className="d-flex justify-content-center align-items-center gap-2">
            <div>
              <AiFillStar style={{ color: "goldenrod" }} />
              <AiFillStar style={{ color: "goldenrod" }} />
              <AiFillStar style={{ color: "goldenrod" }} />
              <AiFillStar style={{ color: "goldenrod" }} />
              <AiFillStar style={{ color: "goldenrod" }} />
            </div>
            <span className="ms-2">{rating.number}</span>
          </div>
          <div className="d-flex justify-content-center align-items-center gap-2">
            <BsEyeFill />
            <span>{total_view}</span>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
