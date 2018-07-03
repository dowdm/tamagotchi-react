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
      hygiene: 100,
      age: 0
    };
    this.updateStats = this.updateStats.bind(this);
    this.handleFeedButtonClick = this.handleFeedButtonClick.bind(this);
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
    let newAge = this.state.age;
    this.setState({foodMeter: newFoodMeter-5})
    this.setState({sleepMeter: newSleepMeter-1})
    this.setState({amusementMeter: newAmusementMeter-3})
    this.setState({hygiene: newHygieneMeter-2})
    this.setState({age: newAge+0.25})
    }

  handleFeedButtonClick() {
    let newFoodMeter = this.state.foodMeter;
    if( newFoodMeter > 90){
      this.setState({foodMeter: 100})
    } else {
      this.setState({foodMeter: newFoodMeter+10})
    }
  }

  render(){
    return (
      <div>
        <h1>Tam!</h1>
        <Stats
          foodMeterValue = {this.state.foodMeter} />
        <ButtonList
          onFeedButtonClick = {this.handleFeedButtonClick} />
        <Image />
      </div>
    );
  }
}

export default Tam;
