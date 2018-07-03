import React from 'react';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';

function Hygiene() {
  return(
    <div>
      Hygiene:
      <ProgressBar now={100}/>
    </div>
  );
}

export default Hygiene;
