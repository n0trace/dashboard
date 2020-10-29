import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ChartCard({ flow, flowId }) {
  let {
    name,
    id,
    official,
    author,
    description
  } = flow;

  return (
    <Link className="unstyled-link" to={`/flow?id=${flowId}`} >
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
      </Card>
    </Link>
  );
}
