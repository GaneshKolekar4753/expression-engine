import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export const RuleList = () => {
    
  return (
    <Form>
      <Row className="mb-3">
        <Col>
          <Form.Group>
            <Form.Label>Rule Type</Form.Label>
            <Form.Control as="select">
              <option value="age">Age</option>
              <option value="credit_score">Credit Score</option>
              <option value="account_balance">Account Balance</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Operator</Form.Label>
            <Form.Control as="select">
              <option value=">">{">"}</option>
              <option value="<">{"<"}</option>
              <option value=">=">{">="}</option>
              <option value="<=">{"<="}</option>
              <option value="=">{"="}</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Value</Form.Label>
            <Form.Control type="number" value={0}/>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Score</Form.Label>
            <Form.Control type="number" value={0}/>
          </Form.Group>
        </Col>
        <Col xs="auto" className="align-self-end">
          <Button variant="danger">Delete</Button>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Group>
            <Form.Label>Rule</Form.Label>
            <Form.Control as="select">
              <option value="age">Age</option>
              <option value="credit_score">Credit Score</option>
              <option value="account_balance">Account Balance</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Operator</Form.Label>
            <Form.Control as="select">
              <option value=">">{">"}</option>
              <option value="<">{"<"}</option>
              <option value=">=">{">="}</option>
              <option value="<=">{"<="}</option>
              <option value="=">{"="}</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Value</Form.Label>
            <Form.Control type="number" value={0}/>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Score</Form.Label>
            <Form.Control type="number" value={0}/>
          </Form.Group>
        </Col>
        <Col xs="auto" className="align-self-end">
          <Button variant="danger">Delete</Button>
        </Col>
      </Row>
      <Button variant="primary" className="mb-3">Add Expression</Button>
      <Form.Group className="mb-3">
        <Form.Label>Combinator</Form.Label>
        <Form.Control className="w-auto" as="select">
          <option value="and">AND</option>
          <option value="or">OR</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};
