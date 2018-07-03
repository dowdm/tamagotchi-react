import React from 'react';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import PropTypes from 'prop-types';

function Amusement(props) {
  return(
    <div>
      Amusement:
      <ProgressBar now={props.amusementMeterValue}/>
    </div>
  );
}
Amusement.propTypes = {
  amusementMeterValue: PropTypes.number,
};

export default Amusement;
