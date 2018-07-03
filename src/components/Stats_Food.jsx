import React from 'react';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import PropTypes from 'prop-types';

function Food(props) {

  return(
    <div>
      Food:
      <ProgressBar now={props.foodMeterValue}/>
    </div>
  );
}
Food.propTypes = {
  foodMeterValue: PropTypes.number,
};
export default Food;
