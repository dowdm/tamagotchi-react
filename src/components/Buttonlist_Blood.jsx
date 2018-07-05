import React from 'react';
import PropTypes from 'prop-types';

function Blood(props) {
  function handleButtonClick() {
    props.onBloodButtonClick(props.selectedTamId);
  }
  return(
    <div>
      <button onClick={handleButtonClick} >Blood of Young</button>
    </div>
  );
}

Blood.propTypes = {
  onBloodButtonClick: PropTypes.func
};
export default Blood;
