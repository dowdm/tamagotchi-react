import React from 'react';
import Feed from './Buttonlist_Feed';
import Play from './Buttonlist_Play';
import Rest from './Buttonlist_Rest';
import Wash from './Buttonlist_Wash';
import Blood from './Buttonlist_Blood';
import PropTypes from 'prop-types';

function ButtonList(props) {
  return(
    <div className='.navbar'>
      <style jsx>{`
          display: flex;
          justify-content: space-around;
        `}</style>
      <Feed
        onFeedButtonClick = {props.onFeedButtonClick}
        selectedTamId = {props.selectedTamId} />
      <Rest
        onRestButtonClick = {props.onRestButtonClick}
        selectedTamId = {props.selectedTamId} />
      <Play
        onPlayButtonClick = {props.onPlayButtonClick}
        selectedTamId = {props.selectedTamId} />
      <Wash
        onWashButtonClick = {props.onWashButtonClick}
        selectedTamId = {props.selectedTamId}/>
      <Blood
        onBloodButtonClick = {props.onBloodButtonClick}
        selectedTamId = {props.selectedTamId}/>
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
