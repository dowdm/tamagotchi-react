import React from 'react';
import PropTypes from 'prop-types';

function Play(props) {

  function handleButtonClick() {
    props.onPlayButtonClick(props.selectedTamId);
  }

  return(
    <div>
      <button onClick={handleButtonClick}>Play</button>
    </div>
  );
}
Play.propTypes = {
  onPlayButtonClick: PropTypes.func,
};
export default Play;
