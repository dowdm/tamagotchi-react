import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import TamList from './TamList';
import { v4 } from 'uuid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTamList: {},
      selectedTam: null
    };
    this.handleAdopt = this.handleAdopt.bind(this);
    this.handleTamSelection = this.handleTamSelection.bind(this);
    this.updateStats = this.updateStats.bind(this);
    // this.handleFeedButtonClick = this.handleFeedButtonClick.bind(this);
    // this.handleRestButtonClick = this.handleRestButtonClick.bind(this);
    // this.handleBloodButtonClick = this.handleBloodButtonClick.bind(this);
    // this.handleWashButtonClick = this.handleWashButtonClick.bind(this);
    // this.handlePlayButtonClick = this.handlePlayButtonClick.bind(this);
  }

  componentDidMount(){
    this.updateTam = setInterval(() =>
      this.updateStats(), 1000);
  }

  updateStats() {
    let newMasterTamList = Object.assign({}, this.state.masterTamList);
    Object.keys(newMasterTamList).forEach(tamId => {
      newMasterTamList[tamId].ageMeter = this.state.masterTamList[tamId].ageMeter + 0.25;
    });
    this.setState({masterTamList: newMasterTamList})

  //   let newFoodMeter = this.state.foodMeter;
  //   let newSleepMeter = this.state.sleepMeter;
  //   let newAmusementMeter = this.state.amusementMeter;
  //   let newHygieneMeter = this.state.hygieneMeter;
  //   let newAgeMeter = this.state.ageMeter;
  //   let newLiving = false;
  //   this.setState({foodMeter: newFoodMeter-5});
  //   this.setState({sleepMeter: newSleepMeter-1});
  //   this.setState({amusementMeter: newAmusementMeter-4});
  //   this.setState({hygieneMeter: newHygieneMeter-2});
  //   this.setState({ageMeter: newAgeMeter+0.25});
  //   if( this.state.foodMeter === 0 || this.state.sleepMeter === 0 || this.state.amusementMeter === 0 || this.state.hygieneMeter === 0 || this.state.ageMeter === 100){
  //     this.setState({living: newLiving});
  //   }
  }

  handleAdopt(newTam) {
    var newTamId = v4();
    var newMasterTamList = Object.assign({}, this.state.masterTamList, {
      [newTamId]: newTam
    });
    this.setState({masterTamList: newMasterTamList});
  }

  handleTamSelection(tamId) {
    this.setState({selectedTam: tamId});
  }

  // handleFeedButtonClick() {
  //   let newFoodMeter = this.state.foodMeter;
  //   if( newFoodMeter > 90){
  //     this.setState({foodMeter: 100});
  //   } else {
  //     this.setState({foodMeter: newFoodMeter+10});
  //   }
  //   this.setState({eating: true});
  //   setTimeout(() => this.setState({eating: false}), 3000);
  // }
  //
  // handleRestButtonClick() {
  //   let newSleepMeter = this.state.sleepMeter;
  //   if( newSleepMeter > 70){
  //     this.setState({sleepMeter: 100});
  //   } else {
  //     this.setState({sleepMeter: newSleepMeter+30});
  //   }
  //   this.setState({sleeping: true});
  //   setTimeout(() => this.setState({sleeping: false}), 3000);
  // }
  // handlePlayButtonClick() {
  //   let newAmusementMeter = this.state.amusementMeter;
  //   if( newAmusementMeter > 95){
  //     this.setState({amusementMeter: 100});
  //   } else {
  //     this.setState({amusementMeter: newAmusementMeter+5});
  //   }
  //   this.setState({playing: true});
  //   setTimeout(() => this.setState({playing: false}), 3000);
  // }
  // handleWashButtonClick() {
  //   this.setState({hygieneMeter: 100});
  //   this.setState({washing: true});
  //   setTimeout(() => this.setState({washing: false}), 3000);
  // }
  // handleBloodButtonClick() {
  //   let newAgeMeter = this.state.ageMeter;
  //   if( newAgeMeter < 2 ){
  //     this.setState({ageMeter: 0});
  //   } else {
  //     this.setState({ageMeter: newAgeMeter-2});
  //   }
  //   this.setState({bloodLust: true});
  //   setTimeout(() => this.setState({bloodLust: false}), 3000);
  // }

  render() {
    return (
      <div>
        {/* <style jsx global>{`
          .image {
          display: flex;
          justify-content: space-around;
          margin: auto;
          width: 800px;
          margin-top: 30px;
        }
        `}
      </style> */}
        <Switch>
          <Route exact path='/' render={(props)=><TamList tamList={this.state.masterTamList} onTamSelection={this.handleTamSelection} onAdopt={this.handleAdopt} selectedTam={this.state.selectedTam}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
