import React from 'react';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';

function Sleep(props) {
  return(
    <div>
      Sleep:
      <ProgressBar now={props.sleepMeterValue}/>
    </div>
  );
}

export default Sleep;
