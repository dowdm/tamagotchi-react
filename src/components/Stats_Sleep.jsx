import React from 'react';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import PropTypes from 'prop-types';

function Sleep(props) {
  return(
    <div>
      Sleep:
      <ProgressBar now={props.sleepMeterValue}/>
    </div>
  );
}

Sleep.propTypes = {
  sleepMeterValue: PropTypes.number,
};

export default Sleep;
