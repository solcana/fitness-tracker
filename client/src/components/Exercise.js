// Hal

import React, { Component } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import CounterInput from "react-bootstrap-counter";

class Exercise extends Component {
  state = {};
  render() {
    return (
      <>
        <h4>Exercise</h4>
        <Container>
          <Form>
            <Row className="align-items-center">
              <Col sm={3} className="my-1">
                <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                  Exercise Name
                </Form.Label>
                <Form.Control
                  id="inlineFormInputName"
                  placeholder="Exercise Name"
                />
              </Col>
              <Col sm={3} className="my-1">
                <Form.Label htmlFor="inlineFormInputGroupWeight" visuallyHidden>
                  Weight
                </Form.Label>
                <InputGroup className="flex-nowrap">
                  <InputGroup.Text>
                    <i className="fa-solid fa-weight-hanging"></i>
                  </InputGroup.Text>
                  <CounterInput />
                </InputGroup>
              </Col>
              <Col sm={3} className="my-1">
                <Form.Label htmlFor="inlineFormInputGroupReps" visuallyHidden>
                  Reps
                </Form.Label>
                <InputGroup className="flex-nowrap">
                  <InputGroup.Text>
                    <i className="fa-solid fa-hashtag"></i>
                  </InputGroup.Text>
                  <CounterInput />
                </InputGroup>
              </Col>
              <Col xs="auto" className="my-1">
                <Form.Check
                  type="checkbox"
                  id="autoSizingCheck2"
                  label="Complete"
                />
              </Col>
              <Col xs="auto" className="my-1">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </>
    );
  }
}

export default Exercise;
