import React from 'react';
import Stats from './Stats';
import Image from './Image';
import ButtonList from './ButtonList';


function TamDetail(props) {
  // return(
  //   <div>
  //     <h1>yahahahah</h1>
  //   </div>
  // )
  if (props.selectedTam === null){
    return(
      <div></div>
    )
  } else {
    if (props.selectedTam.living){
      return (
        <div>
          <h1>gihdkfgh,dfj</h1>
        </div>
      )
    }
  }

  //     <div className='tam'>
  //       <style jsx>{`
  //           .tam {
  //             margin: 50px;
  //           }
  //           h1 {
  //             text-align: center;
  //           }
  //         `}
  //       </style>
  //       <h1>Tam!</h1>
  //       <Stats
  //         foodMeterValue = {this.state.foodMeter}
  //         sleepMeterValue = {this.state.sleepMeter}
  //         amusementMeterValue = {this.state.amusementMeter}
  //         hygieneMeterValue = {this.state.hygieneMeter}
  //         ageMeterValue = {this.state.ageMeter}
  //       />
  //       <ButtonList
  //         onFeedButtonClick = {this.handleFeedButtonClick}
  //         onPlayButtonClick = {this.handlePlayButtonClick}
  //         onWashButtonClick = {this.handleWashButtonClick}
  //         onBloodButtonClick = {this.handleBloodButtonClick}
  //         onRestButtonClick = {this.handleRestButtonClick}
  //       />
  //       <Image className='image'
  //         ageMeter = {this.state.ageMeter}
  //         sleeping = {this.state.sleeping}
  //         eating = {this.state.eating}
  //         washing = {this.state.washing}
  //         playing = {this.state.playing}
  //         bloodLust = {this.state.bloodLust}
  //         living = {this.state.living}/>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <style jsx>{`
  //           h1 {
  //             text-align: center;
  //           }
  //         `}
  //       </style>
  //       <h1>Tam Be Dead!</h1>
  //       <Image
  //         living={this.state.living}/>
  //     </div>
  //   );
  // }
}


export default TamDetail;
