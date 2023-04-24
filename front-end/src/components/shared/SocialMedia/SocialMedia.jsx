import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div>
      <ListGroup>
        <ListGroup.Item className="d-flex gap-2 justify-content-start align-items-center">
          <FaFacebook />
          <span>Facebook</span>
        </ListGroup.Item>

        <ListGroup.Item className="d-flex gap-2 justify-content-start align-items-center">
          <FaTwitter />
          <span>Twitter</span>
        </ListGroup.Item>

        <ListGroup.Item className="d-flex gap-2 justify-content-start align-items-center">
          <FaInstagram />
          <span>Instagram</span>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default SocialMedia;
