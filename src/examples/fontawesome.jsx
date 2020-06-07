/* eslint-disable react/prop-types */
import React from 'react';

function FontAwesome(props) {
  return props.icon ? (
    <i className={`fa fa-${props.icon}`} />
  ) : null;
}

export default FontAwesome;
