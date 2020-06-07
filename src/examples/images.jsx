import React from 'react';
import {
  Button,
  Col,
  Container,
  Image,
  Row,
} from 'react-bootstrap';
import Picture from './picture';

const imgSet = [
  {
    media:
      'only screen and (max-device-width : 721px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio: 1.5), only screen and (max-device-width : 721px) and (orientation : portrait) and (min-device-pixel-ratio: 1.5), only screen and (max-width: 359px)',
    src: 'http://placehold.it/211x311',
  },
  {
    media:
      'only screen  and (min-device-width: 768px)  and (max-device-width: 1024px)  and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2)',
    src: 'http://placehold.it/111x111',
  },
  {
    media:
      'only screen and (min-width: 650px) and (orientation: landscape)',
    src: 'http://placehold.it/500x300',
  },
  {
    media:
      'only screen and (min-width: 465px) and (orientation: portrait)',
    src: 'http://placehold.it/200x500',
  },
  {
    media:
      'only screen and (min-width: 465px) and (orientation: landscape)',
    src: 'http://placehold.it/250x150',
  },
];
const defaultImage = {
  src: 'http://placehold.it/100x100',
  alt: 'The default image',
};

function Images() {
  return (
    <div>
      <h2>Images</h2>
      <Container fluid>
        <Row>
          <Col xs={12} sm={4}>
            <Image src="http://placehold.it/140x180" />
          </Col>
          <Col xs={12} sm={4}>
            <Image
              src="http://placehold.it/140x180"
              roundedCircle
            />
          </Col>
          <Col xs={12} sm={4}>
            <Image
              src="http://placehold.it/140x180"
              rounded
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={4}>
            <Image
              thumbnail
              src="http://placehold.it/140x180"
            />
            <h3>Thumbnail label</h3>

            <p>Description</p>

            <p>
              <Button size="lg" variant="danger">
                Button
              </Button>
            </p>
          </Col>

          <Col xs={12} sm={4}>
            <Image
              thumbnail
              src="http://placehold.it/140x180"
            />
            <h3>Thumbnail label</h3>

            <p>Description</p>

            <p>
              <Button size="lg" variant="warning">
                Button
              </Button>
            </p>
          </Col>

          <Col xs={12} sm={4}>
            <Image
              thumbnail
              src="http://placehold.it/140x180"
            />
            <h3>Thumbnail label</h3>

            <p>Description</p>

            <p>
              <Button size="lg" variant="info">
                Button
              </Button>
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Picture
              imgSet={imgSet}
              defaultImage={defaultImage}
              rounded
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Images;
