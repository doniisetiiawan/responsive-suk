import React from 'react';
import { Alert } from 'react-bootstrap';

function Wells() {
  return (
    <div>
      <h2>Wells</h2>
      <Alert variant="success">
        Hi, I m a small well.
      </Alert>

      <Alert variant="primary">
        Hi, I m a medium well.
      </Alert>

      <Alert>Hi, I m a large well.</Alert>
    </div>
  );
}

export default Wells;
