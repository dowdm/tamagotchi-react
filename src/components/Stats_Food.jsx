import React from 'react';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';

function Food(props) {

  return(
    <div>
      Food:
      <ProgressBar now={props.foodMeterValue}/>
    </div>
  );
}

export default Food;
