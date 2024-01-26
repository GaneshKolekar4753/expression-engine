import React from 'react'
import { Container } from 'react-bootstrap'

export const JSONDisplay = (props) => {
  const {rules,combinator}=props;
  return (
    <Container>
      <div className="mt-4">
        <h2>Expected Output</h2>
        <pre>{JSON.stringify({ rules: rules, combinator }, null, 2)}</pre>
      </div>
    </Container>
  )
}
