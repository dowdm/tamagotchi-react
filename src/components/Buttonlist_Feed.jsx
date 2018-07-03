import React from 'react';
import PropTypes from 'prop-types';

function Feed(props) {
  return(
    <div>
      <button onClick={props.onFeedButtonClick}>Feed</button>
    </div>
  );
}
Feed.propTypes = {
  onFeedButtonClick: PropTypes.func,
};
export default Feed;
