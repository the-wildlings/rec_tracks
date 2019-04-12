import React from 'react';

const WaveForm = (props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w2.org/1999/xlink"
      width="84vw"
      height="150"
      viewBox="23 0 1194 176"
      preserveAspectRatio="none"
    >
      <image href={props.svg} />
    </svg>
  )
}

export default WaveForm;