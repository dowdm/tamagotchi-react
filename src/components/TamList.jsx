import React from 'react';
import Tam from './Tamlist_Tam';
import Adopt from './Tamlist_Adopt';
import PropTypes from 'prop-types';

function  TamList(props){
  return (
    <div>
      <h1>Tamagotchi(s):</h1>
      {Object.keys(props.tamList).map(function(tamId){
        var tam = props.tamList[tamId];
        return <Tam name={tam.name}
          age={tam.ageMeter}
          living = {tam.living}
          key={tamId}
          onTamSelection={props.onTamSelection}
          tamId={tamId} />;
      })}
      <Adopt onAdopt={props.onAdopt}/>
    </div>
  );
}

TamList.propTypes = {
  tamList: PropTypes.object,
  onTamSelection: PropTypes.func,
  onAdopt: PropTypes.func
};

export default TamList;
