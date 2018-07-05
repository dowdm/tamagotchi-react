import React from 'react';
import PropTypes from 'prop-types';

function Feed(props) {

  function handleButtonClick() {
    console.log(props.selectedTamId);
    props.onFeedButtonClick(props.selectedTamId);
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Feed</button>
    </div>
  );
}

Feed.propTypes = {
  onFeedButtonClick: PropTypes.func,
};

export default Feed;
