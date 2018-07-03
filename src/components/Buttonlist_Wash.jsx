import React from 'react';
import PropTypes from 'prop-types';

function Wash(props) {
  return(
    <div>
      <button onClick={props.onWashButtonClick}>Wash</button>
    </div>
  );
}
Wash.propTypes = {
  onWashButtonClick: PropTypes.func,
};

export default Wash;
