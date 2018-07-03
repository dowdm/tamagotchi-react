import React from 'react';
import Feed from './Buttonlist_Feed';
import Play from './Buttonlist_Play';
import Rest from './Buttonlist_Rest';
import Wash from './Buttonlist_Wash';
import Blood from './Buttonlist_Blood';

function ButtonList() {
  return(
    <div>
      <Feed/>
      <Play/>
      <Rest/>
      <Wash/>
      <Blood/>
    </div>
  )
}

export default ButtonList;
