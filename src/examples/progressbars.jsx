/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

class ProgressBars extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
    };
  }

  tick = () => {
    this.setState({
      progress:
        this.state.progress < 100
          ? ++this.state.progress
          : 0,
    });
  };

  componentDidMount = () => {
    // eslint-disable-next-line no-unused-vars
    setInterval(this.tick, 500);
  };

  render() {
    return (
      <>
        <h2>ProgressBars</h2>
        <ProgressBar now={this.state.progress} />

        <ProgressBar
          striped
          variant="success"
          now={this.state.progress}
        />

        <ProgressBar now={this.state.progress} />

        <ProgressBar>
          <ProgressBar
            variant="warning"
            now={20}
            key={1}
            label="System Files"
          />
          <ProgressBar
            variant="info"
            now={40}
            key={2}
            label="Documents"
          />
          <ProgressBar
            variant="danger"
            striped
            now={40}
            key={3}
            label="Crunching"
          />
        </ProgressBar>
      </>
    );
  }
}

export default ProgressBars;
