/* eslint-disable react/prop-types,react/no-array-index-key */
import React from 'react';
import ClassNames from 'classnames';

function Picture(props) {
  const classes = ClassNames({
    'img-responsive': props.responsive,
    'img-portrait': props.portrait,
    'img-rounded': props.rounded,
    'img-circle': props.circle,
    'img-thumbnail': props.thumbnail,
  });

  return (
    <picture>
      {props.imgSet.map((img, idx) => (
        <source
          key={idx}
          media={img.media}
          srcSet={img.src}
        />
      ))}
      {
        <img
          className={classes}
          src={props.defaultImage.src}
          width={props.width}
          height={props.height}
          alt={props.defaultImage.alt}
        />
      }
    </picture>
  );
}

export default Picture;
