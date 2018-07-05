import React from 'react';
import PropTypes from 'prop-types';

function Feed(props) {

  function handleButtonClick() {
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
  selectedTamId: PropTypes.string
};

export default Feed;
