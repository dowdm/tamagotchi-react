import React from 'react';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';

function Amusement() {
  return(
    <div>
      Amusement:
      <ProgressBar now={100}/>
    </div>
  );
}

export default Amusement;
