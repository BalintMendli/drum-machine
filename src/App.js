import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      bank:0,
      power:true,
      volume:0.5,
      display:''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handlePower = this.handlePower.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.audio={};
    this.audio.Q = [new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'), new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3')];
    this.audio.W = [new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'), new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3')];
    this.audio.E = [new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'), new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3')];
    this.audio.A = [new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'), new Audio('https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3')];
    this.audio.S = [new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'), new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3')];
    this.audio.D = [new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'), new Audio('https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3')];
    this.audio.Z = [new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'), new Audio('https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3')];
    this.audio.X = [new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'), new Audio('https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3')];
    this.audio.C = [new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'), new Audio('https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3')];
  }
  handleClick(e){
    if(this.state.power){
      const toDisplay=this.audio[e.target.id][this.state.bank].src.split('/').slice(-1)[0].split('.')[0].replace(/[_-]/g,' ').toUpperCase();
      this.setState({display: toDisplay});
      this.audio[e.target.id][this.state.bank].volume = this.state.volume;
      this.audio[e.target.id][this.state.bank].currentTime = 0;
      this.audio[e.target.id][this.state.bank].play();
    }
  }
  handleChange(){
    if(this.state.bank===0){
      this.setState({bank:1, display: "BANK 2"});
    } else{
      this.setState({bank:0, display: "BANK 1"});
    }
  }
  handleKeyDown(e){
    if(['Q','W','E','A','S','D','Z','X','C'].indexOf(e.key.toUpperCase())!==-1 && this.state.power){
      const toDisplay=this.audio[e.key.toUpperCase()][this.state.bank].src.split('/').slice(-1)[0].split('.')[0].replace(/[_-]/g,' ').toUpperCase();
      this.setState({display: toDisplay});
      this.audio[e.key.toUpperCase()][this.state.bank].volume = this.state.volume;
      this.audio[e.key.toUpperCase()][this.state.bank].currentTime = 0;
      this.audio[e.key.toUpperCase()][this.state.bank].play();
    }
  }
  handlePower(){
    if(this.state.power===true){
      this.setState({power:false, display: ''});
    } else{
      this.setState({power:true});
    }
  }
  handleVolume(e){
    this.setState({volume: e.target.value/100, display: 'VOLUME: '+e.target.value});
  }
  render() {
    return (
      <div className="App" onKeyDown={this.handleKeyDown} tabIndex="0">
        <div id="drum-machine">
          <div id="drum-pad-div">
            <div className="drum-pad" id="Q" onClick={this.handleClick}>Q</div>
            <div className="drum-pad" id="W" onClick={this.handleClick}>W</div>
            <div className="drum-pad" id="E" onClick={this.handleClick}>E</div>
            <div className="drum-pad" id="A" onClick={this.handleClick}>A</div>
            <div className="drum-pad" id="S" onClick={this.handleClick}>S</div>
            <div className="drum-pad" id="D" onClick={this.handleClick}>D</div>
            <div className="drum-pad" id="Z" onClick={this.handleClick}>Z</div>
            <div className="drum-pad" id="X" onClick={this.handleClick}>X</div>
            <div className="drum-pad" id="C" onClick={this.handleClick}>C</div>
          </div>
          <div id="control-div">
            <div id="power">
              <label className="switch">
                <input type="checkbox" defaultChecked onChange={this.handlePower}/>
                <span className="slider"></span>
              </label>
              <div id="power-switch-label">Power</div>
            </div>
            <div id="display">{this.state.display}</div>
            <div id="volume">
              <input type="range" min="0" max="100" value={this.state.volume*100} className="rslider" id="myRange" onChange={this.handleVolume}/>
              <label htmlFor="myRange">Volume</label>
            </div>
            <div id="bank">
              <label className="switch">
                <input type="checkbox" onChange={this.handleChange} />
                <span className="slider"></span>
              </label>
              <div id="bank-switch-label">Bank</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
