import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './grid.css';

function GridExample() {
  return (
    <>
      <h2>The grid</h2>

      <Container fluid>
        <Row>
          <Col xs={1}>1</Col>
          <Col xs={1}>1</Col>
          <Col xs={1}>1</Col>
          <Col xs={1}>1</Col>
          <Col xs={1}>1</Col>
          <Col xs={1}>1</Col>
          <Col xs={1}>1</Col>
          <Col xs={1}>1</Col>
          <Col xs={1}>1</Col>
          <Col xs={1}>1</Col>
          <Col xs={1}>1</Col>
          <Col xs={1}>1</Col>
        </Row>

        <Row>
          <Col xs={2} sm={4}>
            xs2 sm4
          </Col>
          <Col xs={4} sm={4}>
            xs4 sm4
          </Col>
          <Col xs={6} sm={4}>
            xs6 sm4
          </Col>
        </Row>

        <Row>
          <Col xs={6} sm={4} md={8} lg={2}>
            xs6 sm4 md8 lg2
          </Col>
          <Col xs={6} sm={8} md={4} lg={10}>
            xs6 sm8 md4 lg10
          </Col>
        </Row>

        <Row>
          <Col xs={{ span: 3, offset: 1 }}>3 offset 1</Col>
          <Col xs={{ span: 7, offset: 1 }}>7 offset 1</Col>
        </Row>

        <Row>
          <Col xs={{ span: 4, offset: 1 }}>
            4 push 1 (overlaps)
          </Col>
          <Col xs={{ span: 7 }}>7 offset 1</Col>
        </Row>
      </Container>
    </>
  );
}

export default GridExample;
