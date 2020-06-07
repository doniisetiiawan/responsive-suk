/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import {
  Button,
  Carousel,
  Col,
  Container,
  Form,
  Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faGooglePlus,
  faPinterest,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vHeight: 320,
      vWidth: 480,
    };
  }

  componentDidMount = () => {
    window.addEventListener(
      'resize',
      () => {
        this.calculateViewport();
      },
      true,
    );
    this.calculateViewport();
  };

  calculateViewport = () => {
    const vHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0,
    );
    const vWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0,
    );
    this.setState({
      vHeight,
      vWidth,
    });
  };

  handleClick = () => {
    console.log('Email registered');
  };

  renderSmallForm = () => (
    <Form style={{ paddingTop: 15 }}>
      <div
        style={{
          width: this.state.vWidth / 2,
          textAlign: 'center',
          margin: '0 auto',
        }}
      >
        <Form.Control
          type="text"
          size="lg"
          placeholder="Your email"
        />
        <br />
        <Button size="lg" variant="primary">
          Sign up
        </Button>
      </div>
    </Form>
  );

  renderLargeForm = () => (
    <Form style={{ paddingTop: 30 }}>
      <div
        className="input-group"
        style={{
          width: this.state.vWidth / 2,
          textAlign: 'center',
          margin: '0 auto',
        }}
      >
        <Form.Control
          type="text"
          size="lg"
          placeholder="Enter your email address"
        />
        <span className="input-group-btn">
          <Button
            onClick={() => this.handleClick}
            size="lg"
            variant="primary"
          >
            Sign up
          </Button>
        </span>
      </div>
    </Form>
  );

  renderSocialIcons = () => (
    <Row>
      <Col
        xs={12}
        style={{
          fontSize: 32,
          paddingTop: 35,
          position: 'fixed',
          bottom: 10,
          textAlign: 'center',
        }}
      >
        <a href="#" style={{ color: '#eee' }}>
          <FontAwesomeIcon icon={faGooglePlus} />
        </a>
        <a
          href="#"
          style={{ paddingLeft: 15, color: '#eee' }}
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="#"
          style={{ paddingLeft: 15, color: '#eee' }}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="#"
          style={{ paddingLeft: 15, color: '#eee' }}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="#"
          style={{ paddingLeft: 15, color: '#eee' }}
        >
          <FontAwesomeIcon icon={faPinterest} />
        </a>
      </Col>
    </Row>
  );

  render() {
    const { vWidth } = this.state;
    const { vHeight } = this.state;
    const formCode = vWidth <= 480
      ? this.renderSmallForm()
      : this.renderLargeForm();
    const socialIcons = vHeight >= 320 ? this.renderSocialIcons() : null;

    return (
      <>
        <Container
          fluid
          style={{
            margin: '0 auto',
            width: '100%',
            minHeight: '100%',
            background: '#114',
            color: '#eee',
            overflow: 'hidden',
          }}
        >
          <Row style={{ height: vHeight }}>
            <Col
              sm={12}
              style={{ marginTop: vHeight / 20 }}
            >
              <h1 style={{ textAlign: 'center' }}>
                Welcome!
              </h1>

              <div
                style={{
                  maxHeight: 250,
                  maxWidth: 500,
                  margin: '0 auto',
                }}
              >
                <Carousel>
                  <Carousel.Item
                    style={{
                      maxHeight: 250,
                      maxWidth: 500,
                    }}
                  >
                    <img
                      width="100%"
                      alt="500x200"
                      src="http://placehold.it/500x220/f0f0f0/008800?text=It+will+amaze+you"
                    />
                  </Carousel.Item>
                  <Carousel.Item
                    style={{
                      maxHeight: 250,
                      maxWidth: 500,
                    }}
                  >
                    <img
                      width="100%"
                      alt="500x200"
                      src="http://placehold.it/500x220/000000/f0f0f0?text=It+will+excite+you"
                    />
                  </Carousel.Item>
                  <Carousel.Item
                    style={{
                      maxHeight: 250,
                      maxWidth: 500,
                    }}
                  >
                    <img
                      width="100%"
                      alt="500x200"
                      src="http://placehold.it/500x220/880000/eeeeee?text=Sign+up+now!"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col xs={12}>{formCode}</Col>
            <Col xs={12}>
              <p
                style={{
                  textAlign: 'center',
                  paddingTop: 15,
                }}
              >
                Your email will not be shared and will only
                be used once to notify you when the app
                launches.
              </p>
            </Col>
          </Row>
          {socialIcons}
        </Container>
      </>
    );
  }
}

export default App;
