import React from 'react';
import Tam from './Tamlist_Tam';
import Adopt from './Tamlist_Adopt';

function  TamList(props){
{Object.keys(props.tamList).map(function(tamId){
var tam = props.tamList[tamId];
return <Tam name={tam.name}
         age={tam.age}
         living = {props.living}
         key={tamId}
         onTamSelection={props.onTamSelection}
         tamId={tamId} />;
     })}

    <Adopt onAdopt={props.onAdopt}/>
}
