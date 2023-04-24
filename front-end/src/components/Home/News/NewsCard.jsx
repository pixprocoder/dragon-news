import React from "react";

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
          <div className="d-flex justify-content-between">
            <div>img</div>
            <div>Icons</div>
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
          <div>rating</div>
          <div> views</div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
