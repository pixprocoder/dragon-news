import React from "react";

import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const NewsCard = () => {
  return (
    <div>
      <Card>
        <Card.Header>
          <div className="d-flex justify-content-between">
            <div>img</div>
            <div>Icons</div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          {/* <Image src="holder.js/100px250" fluid />; */}
          <h1>Images</h1>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <span className="btn btn-link">Go somewhere</span>
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
