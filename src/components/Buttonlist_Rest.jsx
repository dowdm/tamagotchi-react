import React from 'react';
import PropTypes from 'prop-types';

function Rest(props) {

  function handleButtonClick() {
    props.onRestButtonClick(props.selectedTamId);
  }

  return(
    <div>
      <button onClick={handleButtonClick}>Rest</button>
    </div>
  );
}
Rest.propTypes = {
  onRestButtonClick: PropTypes.func,
  selectedTamId: PropTypes.string
};
export default Rest;
