import React from "react";
import { RuleList } from "./RuleList";
import { Button, Container } from "react-bootstrap";

export const RuleForm = () => {
    
  return (
    <>
      <Container className="m-5">
        <RuleList />
        <Button variant="primary">Submit Expression</Button>
      </Container>
    </>
  );
};
