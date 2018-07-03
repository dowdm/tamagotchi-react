import React from 'react';
import Feed from './Buttonlist_Feed';
import Play from './Buttonlist_Play';
import Rest from './Buttonlist_Rest';
import Wash from './Buttonlist_Wash';
import Blood from './Buttonlist_Blood';
import PropTypes from 'prop-types';

function ButtonList(props) {
  return(
    <div>
      <Feed
        onFeedButtonClick = {props.onFeedButtonClick} />
      <Play
        onPlayButtonClick = {props.onPlayButtonClick}/>
      <Rest
        onRestButtonClick = {props.onRestButtonClick}/>
      <Wash
        onWashButtonClick = {props.onWashButtonClick}/>
      <Blood
        onBloodButtonClick = {props.onBloodButtonClick}/>
    </div>
  );
}

ButtonList.propTypes = {
  onFeedButtonClick: PropTypes.func,
  onPlayButtonClick: PropTypes.func,
  onRestButtonClick: PropTypes.func,
  onWashButtonClick: PropTypes.func,
  onBloodButtonClick: PropTypes.func,
};

export default ButtonList;
