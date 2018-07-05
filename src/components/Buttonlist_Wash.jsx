import React from 'react';
import PropTypes from 'prop-types';

function Wash(props) {
  function handleButtonClick() {
    props.onWashButtonClick(props.selectedTamId);
  }
  return(
    <div>
      <button onClick={handleButtonClick}>Wash</button>
    </div>
  );
}
Wash.propTypes = {
  onWashButtonClick: PropTypes.func,
};

export default Wash;
