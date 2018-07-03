import React from 'react';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';

function Amusement(props) {
  return(
    <div>
      Amusement:
      <ProgressBar now={props.amusementMeterValue}/>
    </div>
  );
}

export default Amusement;
