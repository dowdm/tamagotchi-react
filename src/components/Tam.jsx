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
    this.updateFoodMeter = this.updateFoodMeter.bind(this);
    this.handleFeedButtonClick = this.handleFeedButtonClick.bind(this);
  }

  componentDidMount(){
    this.updateStats = setInterval(() =>
    this.updateFoodMeter(), 1000);
  }

  updateFoodMeter() {
    let newFoodMeter = this.state.foodMeter;
    this.setState({foodMeter: newFoodMeter-1})
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
