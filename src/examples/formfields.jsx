import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class Formfields extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
    this.inputEmail = React.createRef();
    this.inputPassword = React.createRef();
  }

  validateEmail = () => {
    const { length } = this.state.email;
    const validEmail = this.state.email.match(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    );
    if (validEmail) return 'success';
    if (length > 5) return 'warning';
    if (length > 0) return 'error';
  };

  validatePassword = () => {
    const pw = this.state.password;
    if (pw.length < 5) return null;
    const containsNumber = pw.match(/[0-9]/);
    const hasCapitalLetter = pw.toLowerCase() !== pw;
    return containsNumber && hasCapitalLetter
      ? 'success'
      : 'error';
  };

  handlePasswordChange = () => {
    this.setState({
      password: this.inputPassword.current.value,
    });
  };

  handleEmailChange = () => {
    this.setState({
      email: this.inputEmail.current.value,
    });
  };

  validateForm = () => this.validateEmail() === this.validatePassword();

  render() {
    return (
      <>
        <Form>
          <Form.Control
            type="text"
            label="Name"
            placeholder="Enter your name"
          />
          <Form.Control
            type="email"
            label="Email Address"
            placeholder="Enter your email"
            onChange={this.handleEmailChange}
            ref={this.inputEmail}
          />
          <Form.Text>
            {this.validateEmail()}
          </Form.Text>
          <Form.Control
            type="password"
            label="Password"
            onChange={this.handlePasswordChange}
            ref={this.inputPassword}
          />
          <Form.Text>
            {this.validatePassword()}
          </Form.Text>

          <Button
            type="submit"
            disabled={!this.validateForm()}
          >
            Submit this form
          </Button>
        </Form>
      </>
    );
  }
}

export default Formfields;
