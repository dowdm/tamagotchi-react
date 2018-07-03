import React from 'react';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';

function Sleep() {
  return(
    <div>
      Sleep:
      <ProgressBar now={100}/>
    </div>
  );
}

export default Sleep;
