import React from 'react';
import Stats from './Stats';
import Image from './Image';
import ButtonList from './ButtonList';

class Tam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodMeter: 100,
      sleepMeter: 100,
      amusementMeter: 100,
      hygieneMeter: 100,
      ageMeter: 0,
      playing: false,
      washing: false,
      eating: false,
      sleeping: false
    };
    this.updateStats = this.updateStats.bind(this);
    this.handleFeedButtonClick = this.handleFeedButtonClick.bind(this);
    this.handleRestButtonClick = this.handleRestButtonClick.bind(this);
    this.handleBloodButtonClick = this.handleBloodButtonClick.bind(this);
    this.handleWashButtonClick = this.handleWashButtonClick.bind(this);
    this.handlePlayButtonClick = this.handlePlayButtonClick.bind(this);
  }

  componentDidMount(){
    this.updateTam = setInterval(() =>
    this.updateStats(), 1000);
  }

  updateStats() {
    let newFoodMeter = this.state.foodMeter;
    let newSleepMeter = this.state.sleepMeter;
    let newAmusementMeter = this.state.amusementMeter;
    let newHygieneMeter = this.state.hygieneMeter;
    let newAgeMeter = this.state.ageMeter;
    this.setState({foodMeter: newFoodMeter-5})
    this.setState({sleepMeter: newSleepMeter-1})
    this.setState({amusementMeter: newAmusementMeter-4})
    this.setState({hygieneMeter: newHygieneMeter-2})
    this.setState({ageMeter: newAgeMeter+0.25})
    }

  handleFeedButtonClick() {
    let newFoodMeter = this.state.foodMeter;
    if( newFoodMeter > 90){
      this.setState({foodMeter: 100})
    } else {
      this.setState({foodMeter: newFoodMeter+10})
    }
    this.setState({eating: true})
    setTimeout(() => this.setState({eating: false}), 3000)
  }

  handleRestButtonClick() {
    let newSleepMeter = this.state.sleepMeter;
    if( newSleepMeter > 70){
      this.setState({sleepMeter: 100})
    } else {
      this.setState({sleepMeter: newSleepMeter+30})
    }
  }
  handlePlayButtonClick() {
    let newAmusementMeter = this.state.amusementMeter;
    if( newAmusementMeter > 95){
      this.setState({amusementMeter: 100})
    } else {
      this.setState({amusementMeter: newAmusementMeter+5})
    }
  }
  handleWashButtonClick() {
      this.setState({hygieneMeter: 100})
  }
  handleBloodButtonClick() {
    let newAgeMeter = this.state.ageMeter;
    if( newAgeMeter < 2 ){
      this.setState({ageMeter: 0})
    } else {
      this.setState({ageMeter: newAgeMeter-2})
    }
  }

  render(){
    return (
      <div>
        <h1>Tam!</h1>
        <Stats
          foodMeterValue = {this.state.foodMeter}
          sleepMeterValue = {this.state.sleepMeter}
          amusementMeterValue = {this.state.amusementMeter}
          hygieneMeterValue = {this.state.hygieneMeter}
          ageMeterValue = {this.state.ageMeter}
          />
        <ButtonList
          onFeedButtonClick = {this.handleFeedButtonClick}
          onPlayButtonClick = {this.handlePlayButtonClick}
          onWashButtonClick = {this.handleWashButtonClick}
          onBloodButtonClick = {this.handleBloodButtonClick}
          onRestButtonClick = {this.handleRestButtonClick}
          />
        <Image
          ageMeter = {this.state.ageMeter}
          sleeping = {this.state.sleeping}
          eating = {this.state.eating}
          washing = {this.state.washing}
          playing = {this.state.playing} />

      </div>
    );
  }
}

export default Tam;
