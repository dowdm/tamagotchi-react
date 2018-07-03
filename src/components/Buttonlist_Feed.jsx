import React from 'react';

function Feed(props) {
  return(
    <div>
      <button onClick={props.onFeedButtonClick}>Feed</button>
    </div>
  )
}

export default Feed;
