import React from 'react';
import PropTypes from 'prop-types';

function Play(props) {
  return(
    <div>
      <button onClick={props.onPlayButtonClick}>Play</button>
    </div>
  );
}
Play.propTypes = {
  onPlayButtonClick: PropTypes.func,
};
export default Play;
