import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bank: 0,
      power: true,
      volume: 0.5,
      display: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handlePower = this.handlePower.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handleKeyActive = this.handleKeyActive.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.ref = {
      Q: React.createRef(),
      W: React.createRef(),
      E: React.createRef(),
      A: React.createRef(),
      S: React.createRef(),
      D: React.createRef(),
      Z: React.createRef(),
      X: React.createRef(),
      C: React.createRef(),
    };
    this.audio = {
      Q: [
        new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'),
        new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'),
      ],
      W: [
        new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'),
        new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'),
      ],
      E: [
        new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'),
        new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'),
      ],
      A: [
        new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'),
        new Audio(
          'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
        ),
      ],
      S: [
        new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'),
        new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'),
      ],
      D: [
        new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'),
        new Audio('https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'),
      ],
      Z: [
        new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'),
        new Audio(
          'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
        ),
      ],
      X: [
        new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'),
        new Audio(
          'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
        ),
      ],
      C: [
        new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'),
        new Audio('https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'),
      ],
    };
  }

  componentDidMount() {
    this.div.focus();
  }

  handleClick(e) {
    const { power, bank, volume } = this.state;
    if (power) {
      const toDisplay = this.audio[e.target.id][bank].src
        .split('/')
        .slice(-1)[0]
        .split('.')[0]
        .replace(/[_-]/g, ' ')
        .toUpperCase();
      this.setState({ display: toDisplay });
      this.audio[e.target.id][bank].volume = volume;
      this.audio[e.target.id][bank].currentTime = 0;
      this.audio[e.target.id][bank].play();
    }
  }

  handleChange() {
    const { bank } = this.state;
    if (bank === 0) {
      this.setState({ bank: 1, display: 'BANK 2' });
    } else {
      this.setState({ bank: 0, display: 'BANK 1' });
    }
  }

  handleKeyDown(e) {
    const { power, bank, volume } = this.state;
    if (
      ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'].indexOf(
        e.key.toUpperCase()
      ) !== -1 &&
      power
    ) {
      this.handleKeyActive(e.key.toUpperCase());
      const toDisplay = this.audio[e.key.toUpperCase()][bank].src
        .split('/')
        .slice(-1)[0]
        .split('.')[0]
        .replace(/[_-]/g, ' ')
        .toUpperCase();
      this.setState({ display: toDisplay });
      this.audio[e.key.toUpperCase()][bank].volume = volume;
      this.audio[e.key.toUpperCase()][bank].currentTime = 0;
      this.audio[e.key.toUpperCase()][bank].play();
    }
  }

  handlePower() {
    const { power } = this.state;
    if (power === true) {
      this.setState({ power: false, display: '' });
    } else {
      this.setState({ power: true });
    }
  }

  handleVolume(e) {
    this.setState({
      volume: e.target.value / 100,
      display: `VOLUME: ${e.target.value}`,
    });
  }

  handleKeyActive(key) {
    if (this.ref[key].current.className.indexOf(' down') === -1) {
      this.ref[key].current.className += ' down';
    }
  }

  handleKeyUp(e) {
    if (
      ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'].indexOf(
        e.key.toUpperCase()
      ) !== -1
    ) {
      this.ref[e.key.toUpperCase()].current.className = this.ref[
        e.key.toUpperCase()
      ].current.className.replace(' down', '');
    }
  }

  render() {
    const { display, volume } = this.state;
    return (
      <div
        className="App"
        role="tabpanel"
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
        ref={c => {
          this.div = c;
        }}
        tabIndex="0"
      >
        <div id="drum-machine">
          <div id="title">Drum Machine</div>
          <div id="drum-pad-div">
            <button
              type="button"
              className="drum-pad"
              ref={this.ref.Q}
              id="Q"
              onClick={this.handleClick}
            >
              Q
            </button>
            <button
              type="button"
              className="drum-pad"
              ref={this.ref.W}
              id="W"
              onClick={this.handleClick}
            >
              W
            </button>
            <button
              type="button"
              className="drum-pad"
              ref={this.ref.E}
              id="E"
              onClick={this.handleClick}
            >
              E
            </button>
            <button
              type="button"
              className="drum-pad"
              ref={this.ref.A}
              id="A"
              onClick={this.handleClick}
            >
              A
            </button>
            <button
              type="button"
              className="drum-pad"
              ref={this.ref.S}
              id="S"
              onClick={this.handleClick}
            >
              S
            </button>
            <button
              type="button"
              className="drum-pad"
              ref={this.ref.D}
              id="D"
              onClick={this.handleClick}
            >
              D
            </button>
            <button
              type="button"
              className="drum-pad"
              ref={this.ref.Z}
              id="Z"
              onClick={this.handleClick}
            >
              Z
            </button>
            <button
              type="button"
              className="drum-pad"
              ref={this.ref.X}
              id="X"
              onClick={this.handleClick}
            >
              X
            </button>
            <button
              type="button"
              className="drum-pad"
              ref={this.ref.C}
              id="C"
              onClick={this.handleClick}
            >
              C
            </button>
          </div>
          <div id="control-div">
            <div id="power">
              <label className="switch" htmlFor="power-check-box">
                <input
                  type="checkbox"
                  id="power-check-box"
                  defaultChecked
                  onChange={this.handlePower}
                />
                <span className="slider power" />
              </label>
              <div id="power-switch-label">Power</div>
            </div>
            <div id="display">{display}</div>
            <div id="volume">
              <input
                type="range"
                min="0"
                max="100"
                value={volume * 100}
                className="rslider"
                id="myRange"
                onChange={this.handleVolume}
              />
              <label htmlFor="myRange" className="myRange-class">
                Volume
              </label>
            </div>
            <div id="bank">
              <label className="switch" htmlFor="bank-check-box">
                <input
                  type="checkbox"
                  id="bank-check-box"
                  onChange={this.handleChange}
                />
                <span className="slider" />
              </label>
              <div id="bank-switch-label">Bank</div>
            </div>
          </div>
        </div>
        <div id="footer">
          by <a href="http://github.com/zenott">zenott</a>
        </div>
      </div>
    );
  }
}

export default App;
