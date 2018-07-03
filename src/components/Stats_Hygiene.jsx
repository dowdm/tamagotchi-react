import React from 'react';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';

function Hygiene(props) {
  return(
    <div>
      Hygiene:
      <ProgressBar now={props.hygieneMeterValue}/>
    </div>
  );
}

export default Hygiene;
