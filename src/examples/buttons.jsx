import React, { Component } from 'react';
import {
  Button,
  ButtonGroup,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';

class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  setLoading = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  };

  render() {
    const { isLoading } = this.state;

    return (
      <div>
        <h2>Buttons</h2>
        <h5>Simple buttons</h5>

        <ButtonGroup>
          <Button variant="default">Default</Button>

          <Button variant="primary">Primary</Button>

          <Button variant="success">Success</Button>

          <Button variant="info">Info</Button>

          <Button variant="warning">Warning</Button>

          <Button variant="danger">Danger</Button>

          <Button variant="link">Link</Button>
        </ButtonGroup>

        <h5>Full-width buttons</h5>
        <>
          <Button variant="primary" size="sm" block>
            Small block button (full-width)
          </Button>
          <Button variant="info" size="md" block>
            Medium block button (full-width)
          </Button>
          <Button variant="success" size="lg" block>
            Large block button (full-width)
          </Button>
        </>

        <h5>Active, non-active and disabled buttons</h5>
        <ButtonGroup>
          <Button>Default button - Non-active</Button>
          <Button active>Default button - Active</Button>
          <Button disabled>
            Default button - Disabled
          </Button>
        </ButtonGroup>

        <h5>Loading state</h5>
        <Button
          variant="primary"
          disabled={isLoading}
          onClick={() => this.setLoading()}
        >
          {isLoading ? 'Loading...' : 'Loading state'}
        </Button>

        <h5>Groups and Toolbar</h5>
        <ButtonGroup>
          <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button>4</Button>
            <Button>5</Button>
          </ButtonGroup>
        </ButtonGroup>

        <h5>Dropdown buttons</h5>
        <ButtonGroup>
          <DropdownButton
            title="Dropdown"
            id="bg-nested-dropdown"
          >
            <Dropdown.Item variant="link" eventKey="1">
              Dropdown link
            </Dropdown.Item>
            <Dropdown.Item variant="link" eventKey="2">
              Dropdown link
            </Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            title="Dropdown noCaret"
            id="bg-nested-dropdown-nocaret"
          >
            <Dropdown.Item variant="link" eventKey="1">
              Dropdown link
            </Dropdown.Item>
            <Dropdown.Item variant="link" eventKey="2">
              Dropdown link
            </Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            title="Dropup"
            id="bg-nested-dropup"
          >
            <Dropdown.Item variant="link" eventKey="1">
              Dropdown link
            </Dropdown.Item>
            <Dropdown.Item variant="link" eventKey="2">
              Dropdown link
            </Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            variant="success"
            title="Splitbutton down"
            id="successbutton"
          >
            <Dropdown.Item eventKey="1">
              Action
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">
              Another action
            </Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            variant="success"
            title="Splitbutton up"
            id="successbutton"
          >
            <Dropdown.Item eventKey="1">
              Action
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">
              Another action
            </Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>
      </div>
    );
  }
}

export default Buttons;
