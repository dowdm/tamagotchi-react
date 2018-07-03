import React from 'react';
import babyTam from '../assets/images/baby-tam.gif';
import babyTamEating from '../assets/images/baby-tam-eating.gif';
import babyTamPlaying from '../assets/images/baby-tam-playing.gif';
import babyTamWashing from '../assets/images/baby-tam-washing.gif';
import babyTamSleeping from '../assets/images/baby-tam-sleeping.gif';
import blood from '../assets/images/drinking-blood.jpg';
import tam from '../assets/images/tam.gif';
import tamEating from '../assets/images/tam-eating.gif';
import tamPlaying from '../assets/images/tam-playing.gif';
import tamWashing from '../assets/images/tam-washing.gif';
import tamSleeping from '../assets/images/tam-sleeping.gif';
import dead from '../assets/images/dead.png';
import PropTypes from 'prop-types';

function Image(props) {
  if (props.ageMeter < 10){
    if (props.eating) {
      return(
        <div className='image'>
          <img src={babyTamEating}/>
        </div>
      );
    } else if (props.washing) {
      return(
        <div className='image'>
          <img src={babyTamWashing}/>
        </div>
      );
    } else if (props.sleeping) {
      return(
        <div className='image'>
          <img src={babyTamSleeping}/>
        </div>
      );
    } else if (props.playing) {
      return(
        <div className='image'>
          <img src={babyTamPlaying}/>
        </div>
      );
    } else if (props.bloodLust) {
      return(
        <div className='image'>
          <img src={blood}/>
        </div>
      );
    } else if (props.living === false) {
      return(
        <div className='image'>
          <img src={dead}/>
        </div>
      );
    } else {
      return(
        <div className='image'>
          <img src={babyTam}/>
        </div>
      );
    }
  } else {
    if (props.eating) {
      return(
        <div className='image'>
          <img src={tamEating}/>
        </div>
      );
    } else if (props.washing) {
      return(
        <div className='image'>
          <img src={tamWashing}/>
        </div>
      );
    } else if (props.sleeping) {
      return(
        <div className='image'>
          <img src={tamSleeping}/>
        </div>
      );
    } else if (props.playing) {
      return(
        <div className='image'>
          <img src={tamPlaying}/>
        </div>
      );
    } else if (props.bloodLust) {
      return(
        <div className='image'>
          <img src={blood}/>
        </div>
      );
    } else if (props.living === false) {
      return (
        <div className='image'>
          <img src={dead}/>
        </div>
      );
    } else {
      return(
        <div className='image'>
          <img src={tam}/>
        </div>
      );
    }
  }
}

Image.propTypes = {
  ageMeter: PropTypes.number,
  eating: PropTypes.bool,
  washing: PropTypes.bool,
  sleeping: PropTypes.bool,
  playing: PropTypes.bool,
  bloodLust: PropTypes.bool,
  living: PropTypes.bool
};

export default Image;
