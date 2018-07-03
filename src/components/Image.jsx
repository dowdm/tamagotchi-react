import React from 'react';
import babyTam from '../assets/images/baby-tam.gif';
import babyTamEating from '../assets/images/baby-tam-eating.gif';
import tam from '../assets/images/tam.gif'

function Image(props) {
  if (props.ageMeter < 10){
    if (props.eating) {
      return(
        <div>
          <img src={babyTamEating}/>
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
