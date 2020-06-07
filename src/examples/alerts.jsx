import React, { Component } from 'react';
import { Alert, Button } from 'react-bootstrap';

class Alerts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alertVisible: true,
    };
  }

  render() {
    if (this.state.alertVisible) {
      return (
        <Alert
          variant="danger"
          onClose={() => {
            this.setState({ alertVisible: false });
          }}
        >
          <h4>An error has occurred!</h4>
          <p>Try something else and hope for the best.</p>
          <p>
            <Button variant="danger">Do this</Button>
            <span> or </span>
            <Button
              onClick={() => {
                this.setState({ alertVisible: false });
              }}
            >
              Forget it
            </Button>
          </p>
        </Alert>
      );
    }
    return null;
  }
}

export default Alerts;
