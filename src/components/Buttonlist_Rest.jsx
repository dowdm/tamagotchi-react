import React from 'react';
import PropTypes from 'prop-types';

function Rest(props) {
  return(
    <div>
      <button onClick={props.onRestButtonClick}>Rest</button>
    </div>
  );
}
Rest.propTypes = {
  onRestButtonClick: PropTypes.func,
};
export default Rest;
