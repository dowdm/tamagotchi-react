import React from 'react';
import PropTypes from 'prop-types';


function Age(props) {
  return(
    <div>
      Age:{props.ageMeterValue}
    </div>
  );
}
Age.propTypes = {
  ageMeterValue: PropTypes.number,
};

export default Age;
