/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';

class Panels extends Component {
  render() {
    return (
      <>
        <h2>Panels</h2>
        <div>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button}>
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse>
                <Card.Body>
                  This text is hidden until you click the button.</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </>
    );
  }
}

export default Panels;
