import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
            </div>
            <div id="display"></div>
            <div id="volume">
              <input type="range" min="1" max="100" defaultValue="50" className="rslider" id="myRange"/>
            </div>
            <div id="bank">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
