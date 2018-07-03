import React from 'react';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import PropTypes from 'prop-types';

function Hygiene(props) {
  return(
    <div>
      Hygiene:
      <ProgressBar now={props.hygieneMeterValue}/>
    </div>
  );
}
Hygiene.propTypes = {
  hygieneMeterValue: PropTypes.number,
};

export default Hygiene;
