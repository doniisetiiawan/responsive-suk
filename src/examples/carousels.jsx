import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class Carousels extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect = (selectedIndex, selectedDirection) => {
    this.setState({
      index: selectedIndex,
      direction: selectedDirection,
    });
  };

  render() {
    return (
      <div>
        <h2>Uncontrolled Carousel</h2>
        <Carousel>
          <Carousel.Item>
            <img
              width="100%"
              height={150}
              alt="600x150"
              src="http://placehold.it/600x150"
            />
            <div className="carousel-caption">
              <h3>Slide label 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              height={150}
              alt="600x150"
              src="http://placehold.it/600x150"
            />
            <div className="carousel-caption">
              <h3>Slide label 2</h3>
              <p>
                Nulla vitae elit libero, a pharetra augue
                mollis interdum.
              </p>
            </div>
          </Carousel.Item>
        </Carousel>

        <h2>Controlled Carousel</h2>
        <Carousel
          activeIndex={this.state.index}
          direction={this.state.direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              width="100%"
              height={150}
              alt="600x150"
              src="http://placehold.it/600x150"
            />
            <div className="carousel-caption">
              <h3>Slide label 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              height={150}
              alt="600x150"
              src="http://placehold.it/600x150"
            />
            <div className="carousel-caption">
              <h3>Slide label 2</h3>
              <p>
                Nulla vitae elit libero, a pharetra augue
                mollis interdum.
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Carousels;
