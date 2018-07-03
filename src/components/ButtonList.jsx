import React from 'react';
import Feed from './Buttonlist_Feed';
import Play from './Buttonlist_Play';
import Rest from './Buttonlist_Rest';
import Wash from './Buttonlist_Wash';
import Blood from './Buttonlist_Blood';

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
  )
}

export default ButtonList;
