import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "shards-react";

export default function CopyCommand(props) {
  const { image } = props;
  return (
    <Card className="mb-4">
      <CardHeader className="p-3 border-bottom d-flex flex-row">
        <h6 className="m-0 d-inline-block">Usage</h6>
      </CardHeader>
      <CardBody className="py-2 px-3 pt-4 code-usage">
        <p className="mb-1">Use this runner in Flow API</p>
        {image.params !== undefined ? <div>
          <p></p>
          <h6 className="m-0 d-inline-block">Params</h6>
          <Row className="border-bottom py-2">
            <Col>name</Col>
            <Col>type</Col>
            <Col>required</Col>
          </Row>
          {image.params.map((propertie, index) => {
            return (
              <Row className="border-bottom py-2">
                <Col>{propertie.name}</Col>
                <Col>{propertie.type}</Col>
                <Col>{propertie.required ? 'true' : 'false'}</Col>
              </Row>
            )
          })}
        </div> : null}

        {image.response !== undefined ? <div>
          <p></p>
          <h6 className="m-0 d-inline-block">Response</h6>
          <Row className="border-bottom py-2">
            <Col>name</Col>
            <Col>type</Col>
            <Col>required</Col>
          </Row>
          {image.response.map((propertie, index) => {
            return (
              <Row className="border-bottom py-2">
                <Col>{propertie.name}</Col>
                <Col>{propertie.type}</Col>
                <Col>{propertie.required ? 'true' : 'false'}</Col>
              </Row>
            )
          })}
        </div> : null}
      </CardBody>
    </Card>
  );
}