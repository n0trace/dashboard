import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

export default function ImageCard({ image }) {
  let {
    name,
    id,
    official,
    author,
    description,
    avg_stars,
    num_reviews,
  } = image;

  let rating;
  if (image.avg_stars) {
    rating = avg_stars;
  }

  let reviews;
  if (!num_reviews) reviews = <span className="text-muted">no reviews</span>;
  else if (num_reviews > 1) reviews = <span>{num_reviews} reviews</span>;
  else reviews = <span>{num_reviews} review</span>;

  return (
    <Link className="unstyled-link" to={`/package?id=${id}`}>
      <Card className="clickable mb-4 h-100">
        <Card.Body className="pb-0 mb-0 pt-3">
          <Row>
            <Col xs="12" className="px-0">
              <div className="app-title">
                {name}
                {official && (
                  <span title="Official Package" className="float-right">
                    <i className="ml-2 material-icons verified-icon">
                      verified_user
                    </i>
                  </span>
                )}
              </div>
              <div className="app-subtitle">{author}</div>
            </Col>
            <Col sm="12" className="px-0 pt-3 pb-0">
              <div className="description-container">
                <div className="description-overlay" />
                <div className="app-description">{description}</div>
              </div>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="pt-0 px-3 pb-3">
          {reviews}
          {rating && <StarRating rating={rating} />}
        </Card.Footer>
      </Card>
    </Link>
  );
}
