import React from 'react';
import PropTypes from 'prop-types';

function Blood(props) {
  return(
    <div>
      <button onClick={props.onBloodButtonClick} >Blood of Young</button>
    </div>
  );
}

Blood.propTypes = {
  onBloodButtonClick: PropTypes.func
};
export default Blood;
