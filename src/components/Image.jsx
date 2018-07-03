import React from 'react';
import babyTam from '../assets/images/baby-tam.gif';
import babyTamEating from '../assets/images/baby-tam-eating.gif';
import babyTamPlaying from '../assets/images/baby-tam-playing.gif';
import babyTamWashing from '../assets/images/baby-tam-washing.gif';
import babyTamSleeping from '../assets/images/baby-tam-sleeping.gif';
import blood from '../assets/images/drinking-blood.jpg';
import tam from '../assets/images/tam.gif'

function Image(props) {
  if (props.ageMeter < 10){
    if (props.eating) {
      return(
        <div>
          <img src={babyTamEating}/>
        </div>
      )
    } else if (props.washing) {
      return(
        <div>
          <img src={babyTamWashing}/>
        </div>
      )
    } else if (props.sleeping) {
      return(
        <div>
          <img src={babyTamSleeping}/>
        </div>
      )
    } else if (props.playing) {
      return(
        <div>
          <img src={babyTamPlaying}/>
        </div>
      )
    } else if (props.bloodLust) {
      return(
        <div>
          <img src={blood}/>
        </div>
      )
    } else {
      return(
        <div>
          <img src={babyTam}/>
        </div>
      )
    }
  } else {
    return(
      <div>
        <img src={tam}/>
      </div>
    )
  }
}

export default Image;
