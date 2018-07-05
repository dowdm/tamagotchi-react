import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import TamList from './TamList';
import TamDetail from './TamDetail';
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
    let newMasterTamList = Object.assign({}, this.state.masterTamList);
    Object.keys(newMasterTamList).forEach(tamId => {
      newMasterTamList[tamId].ageMeter = this.state.masterTamList[tamId].ageMeter + 0.25;
      newMasterTamList[tamId].foodMeter = this.state.masterTamList[tamId].foodMeter - 5;
      newMasterTamList[tamId].sleepMeter = this.state.masterTamList[tamId].sleepMeter - 1;
      newMasterTamList[tamId].amusementMeter = this.state.masterTamList[tamId].amusementMeter - 4;
      newMasterTamList[tamId].hygieneMeter = this.state.masterTamList[tamId].hygieneMeter -2;
      if(this.state.masterTamList[tamId].foodMeter === 0 || this.state.masterTamList[tamId].sleepMeter === 0 || this.state.masterTamList[tamId].amusementMeter === 0 || this.state.masterTamList[tamId].hygieneMeter === 0 || this.state.masterTamList[tamId].ageMeter === 100){
        newMasterTamList[tamId].living = false;
      }
    });
    this.setState({masterTamList: newMasterTamList});
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

  handleFeedButtonClick(tamId) {
    let newMasterTamList = Object.assign({}, this.state.masterTamList);
    if( newMasterTamList[tamId].foodMeter > 90){
      newMasterTamList[tamId].foodMeter = 100;
    } else {
      newMasterTamList[tamId].foodMeter = this.state.masterTamList[tamId].foodMeter + 10;
    }
    newMasterTamList[tamId].eating = true;
    this.setState(() => {newMasterTamList;});
    console.log('outer object'+this.state.masterTamList===newMasterTamList); //prints false
    console.log('inner obj' + this.state.masterTamList[tamId]===newMasterTamList[tamId]); // prints true

    setTimeout(function() {
      newMasterTamList[tamId].eating = false;
    }, 3000);
    setTimeout(() => this.setState({masterTamList: newMasterTamList}), 3000);
  }

  handleRestButtonClick(tamId) {
    let newMasterTamList = Object.assign({}, this.state.masterTamList);
    if( newMasterTamList[tamId].sleepMeter > 70){
      newMasterTamList[tamId].sleepMeter = 100;
    } else {
      newMasterTamList[tamId].sleepMeter = this.state.masterTamList[tamId].sleepMeter + 30;
    }
    newMasterTamList[tamId].sleeping = true;
    this.setState(() => {newMasterTamList;});
    setTimeout(function() {
      newMasterTamList[tamId].sleeping = false;
    }, 3000);
    setTimeout(() => this.setState({masterTamList: newMasterTamList}), 3000);
  }

  handlePlayButtonClick(tamId) {
    let newMasterTamList = Object.assign({}, this.state.masterTamList);
    if( newMasterTamList[tamId].amusementMeter > 95){
      newMasterTamList[tamId].amusementMeter = 100;
    } else {
      newMasterTamList[tamId].amusementMeter = this.state.masterTamList[tamId].amusementMeter + 5;
    }
    newMasterTamList[tamId].playing = true;
    this.setState(() => {newMasterTamList;});
    setTimeout(function() {
      newMasterTamList[tamId].playing = false;
    }, 3000);
    setTimeout(() => this.setState({masterTamList: newMasterTamList}), 3000);
  }

  handleWashButtonClick(tamId) {
    let newMasterTamList = Object.assign({}, this.state.masterTamList);
    newMasterTamList[tamId].hygieneMeter = 100;
    newMasterTamList[tamId].washing = true;
    this.setState(() => {newMasterTamList;});
    setTimeout(function() {
      newMasterTamList[tamId].washing = false;
    }, 3000);
    setTimeout(() => this.setState({masterTamList: newMasterTamList}), 3000);
  }

  handleBloodButtonClick(tamId) {
    let newMasterTamList = Object.assign({}, this.state.masterTamList);
    if( newMasterTamList[tamId].ageMeter < 2){
      newMasterTamList[tamId].ageMeter = 0;
    } else {
      newMasterTamList[tamId].ageMeter = this.state.masterTamList[tamId].ageMeter - 2;
    }
    newMasterTamList[tamId].bloodLust = true;
    this.setState(() => {newMasterTamList;});
    setTimeout(function() {
      newMasterTamList[tamId].bloodLust = false;
    }, 3000);
    setTimeout(() => this.setState({masterTamList: newMasterTamList}), 3000);
  }

  render() {
    let optionalSelectedTamContent = null;
    if (this.state.selectedTam != null){
      optionalSelectedTamContent =  <TamDetail selectedTam={this.state.masterTamList[this.state.selectedTam]}
        selectedTamId={this.state.selectedTam} onFeedButtonClick={this.handleFeedButtonClick} onBloodButtonClick={this.handleBloodButtonClick} onWashButtonClick={this.handleWashButtonClick} onPlayButtonClick={this.handlePlayButtonClick} onRestButtonClick={this.handleRestButtonClick}/>;
    }
    return (
      <div>
        <Switch>
          <Route exact path='/' render={()=>
            <div>
              <TamList tamList={this.state.masterTamList} onTamSelection={this.handleTamSelection} onAdopt={this.handleAdopt} selectedTam={this.state.selectedTam} />
              {optionalSelectedTamContent}
            </div>
          }/>
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
