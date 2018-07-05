import React from 'react';
import Stats from './Stats';
import Image from './Image';
import ButtonList from './ButtonList';


function TamDetail(props) {
  if (props.selectedTam.living){
    return (
      <div className='tam'>
        <style jsx>{`
            .tam {
              margin: 50px;
            }
            h1 {
              text-align: center;
            }
          `}
        </style>
        <h1>{props.selectedTam.name}</h1>
        <Stats
          foodMeterValue = {props.selectedTam.foodMeter}
          sleepMeterValue = {props.selectedTam.sleepMeter}
          amusementMeterValue = {props.selectedTam.amusementMeter}
          hygieneMeterValue = {props.selectedTam.hygieneMeter}
          ageMeterValue = {props.selectedTam.ageMeter}
        />

        <ButtonList
          onFeedButtonClick = {props.onFeedButtonClick}
          onPlayButtonClick = {props.onPlayButtonClick}
          onWashButtonClick = {props.onWashButtonClick}
          onBloodButtonClick = {props.onBloodButtonClick}
          onRestButtonClick = {props.onRestButtonClick}
          selectedTamId = {props.selectedTamId}
        />

        <Image className='image'
          ageMeter = {props.selectedTam.ageMeter}
          sleeping = {props.selectedTam.sleeping}
          eating = {props.selectedTam.eating}
          washing = {props.selectedTam.washing}
          playing = {props.selectedTam.playing}
          bloodLust = {props.selectedTam.bloodLust}
          living = {props.selectedTam.living}/>
      </div>
    );
  } else {
    return (
      <div>
        <style jsx>{`
            h1 {
              text-align: center;
            }
          `}
        </style>
        <h1>{props.selectedTam.name} be dead.</h1>
        <Image
          living={props.selectedTam.living}/>
      </div>
    );
  }
}


export default TamDetail;
