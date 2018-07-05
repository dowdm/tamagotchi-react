import React from 'react';
import PropTypes from 'prop-types';


function Age(props) {
  return(
    <div>
      <h4>Age:{props.ageMeterValue}</h4>
    </div>
  );
}
Age.propTypes = {
  ageMeterValue: PropTypes.number,
};

export default Age;
