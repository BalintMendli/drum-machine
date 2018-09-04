import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.audioQ1 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3');
    this.audioW1 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3');
    this.audioE1 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3');
    this.audioA1 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3');
    this.audioS1 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3');
    this.audioD1 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3');
    this.audioZ1 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3');
    this.audioX1 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3');
    this.audioC1 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3');
    this.audioQ2 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3');
    this.audioW2 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3');
    this.audioE2 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3');
    this.audioA2 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3');
    this.audioS2 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3');
    this.audioD2 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3');
    this.audioZ2 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3');
    this.audioX2 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3');
    this.audioC2 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3');
  }
  render() {
    return (
      <div className="App">
        <div id="drum-machine">
          <div id="drum-pad-div">
            <div className="drum-pad" id="Q">Q</div>
            <div className="drum-pad" id="W">W</div>
            <div className="drum-pad" id="E">E</div>
            <div className="drum-pad" id="A">A</div>
            <div className="drum-pad" id="S">S</div>
            <div className="drum-pad" id="D">D</div>
            <div className="drum-pad" id="Z">Z</div>
            <div className="drum-pad" id="X">X</div>
            <div className="drum-pad" id="C">C</div>
          </div>
          <div id="control-div">
            <div id="power">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
              <div id="power-switch-label">Power</div>
            </div>
            <div id="display"></div>
            <div id="volume">
              <input type="range" min="1" max="100" defaultValue="50" className="rslider" id="myRange"/>
              <label htmlFor="myRange">Volume</label>
            </div>
            <div id="bank">
              <label className="switch">
                <input type="checkbox" />
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
