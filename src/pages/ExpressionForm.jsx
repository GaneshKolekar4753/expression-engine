import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { JSONDisplay } from "../components/JSONDisplay";

const ExpressionForm = () => {
  //states
  const initialState = {
    key: "age",
    output: { value: 0, operator: ">=", score: 0 },
  };
  const [expressions, setExpressions] = useState([initialState]);
  const [combinator, setCombinator] = useState("and");
  const [submit, setSubmit] = useState(false);

  //add expression
  const handleAddExpression = () => {
    setExpressions([
      ...expressions,
      {
        key: "age",
        output: { value: 0, operator: ">=", score: 0 },
      },
    ]);
  };

  //delete expression
  const handleDeleteExpression = (index) => {
    const updatedExpressions = [...expressions];
    updatedExpressions.splice(index, 1);
    setExpressions(updatedExpressions);
  };

  //take input into state
  const handleChange = (index, field, value) => {
    const updatedExpression = [...expressions];
    if (field === "key") {
      updatedExpression[index][field] = value;
    } else {
      updatedExpression[index]["output"][field] = value;
    }
    setExpressions(updatedExpression);
  };

  //set combinator into state
  const handleCombinatorChange = (e) => {
    setCombinator(e.target.value);
  };
  //handle submit and show json
  const handleSubmit = () => {
    setSubmit(!submit);
  };
  return (
    <Container>
      <h1>Expression Engine UI</h1>
      {/* Display entire form */}
      <Form>
        {/* show inputs for each Expression */}
        {expressions.map((expression, index) => (
          <Row key={index} className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label>Rule Type</Form.Label>
                <Form.Control
                  as="select"
                  value={expression.key}
                  onChange={(e) => handleChange(index, "key", e.target.value)}
                >
                  <option value="age">Age</option>
                  <option value="credit_score">Credit Score</option>
                  <option value="account_balance">Account Balance</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Operator</Form.Label>
                <Form.Control
                  as="select"
                  value={expression.output.operator}
                  onChange={(e) =>
                    handleChange(index, "operator", e.target.value)
                  }
                >
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
                <Form.Control
                  type="number"
                  value={expression.output.value}
                  onChange={(e) => handleChange(index, "value", e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Score</Form.Label>
                <Form.Control
                  type="number"
                  value={expression.output.score}
                  onChange={(e) => handleChange(index, "score", e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col xs="auto" className="align-self-end">
              <Button
                variant="danger"
                onClick={() => handleDeleteExpression(index)}
              >
                Delete
              </Button>
            </Col>
          </Row>
        ))}
        <Button
          variant="primary"
          className="mx-auto"
          onClick={handleAddExpression}
        >
          Add Expression
        </Button>
        <Form.Group className="mb-3">
          <Form.Label>Combinator</Form.Label>
          <Form.Control
            as="select"
            className="w-auto"
            value={combinator}
            onChange={handleCombinatorChange}
          >
            <option value="and">AND</option>
            <option value="or">OR</option>
          </Form.Control>
        </Form.Group>

        <Button variant="success" className="m-3" onClick={handleSubmit}>
          Submit Expression
        </Button>
      </Form>
      {/* JSON display */}
      {submit ? (
        <JSONDisplay rules={expressions} combinator={combinator} />
      ) : (
        ""
      )}
    </Container>
  );
};

export default ExpressionForm;
