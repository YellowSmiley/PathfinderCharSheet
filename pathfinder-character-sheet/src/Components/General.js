import React, { Component } from "react";

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characterName: "",
      alignment: "",
      playerName: "",
      characterClassLevel: "",
      deity: "",
      homeland: "",
      race: "",
      size: "",
      gender: "",
      age: "",
      height: "",
      hair: "",
      eyes: ""
    };
  }
  render() {
    return (
      <div className="panel">
        <div className="panel-header">General</div>
        <div className="wrapper">
          <form>
            <div>
              <label htmlFor="characterName">Character Name</label>
              <input
                id="characterName"
                value={this.state.characterName}
                onChange={e => this.setState({ characterName: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="alignment">Alignment</label>
              <input
                id="alignment"
                value={this.state.alignment}
                onChange={e => this.setState({ alignment: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="playerName">Player Name</label>
              <input
                id="playerName"
                value={this.state.playerName}
                onChange={e => this.setState({ playerName: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="characterClassLevel">
                Character Class &amp; Level
              </label>
              <input
                id="characterClassLevel"
                value={this.state.characterClassLevel}
                onChange={e =>
                  this.setState({ characterClassLevel: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="deity">Deity</label>
              <input
                id="deity"
                value={this.state.deity}
                onChange={e => this.setState({ deity: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="homeland">Homeland</label>
              <input
                id="homeland"
                value={this.state.homeland}
                onChange={e => this.setState({ homeland: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="race">Race</label>
              <input
                id="race"
                value={this.state.race}
                onChange={e => this.setState({ race: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="size">Size</label>
              <input
                id="size"
                value={this.state.size}
                onChange={e => this.setState({ size: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="gender">Gender</label>
              <input
                id="gender"
                value={this.state.gender}
                onChange={e => this.setState({ gender: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="age">Age</label>
              <input
                id="age"
                value={this.state.age}
                onChange={e => this.setState({ age: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="height">Height</label>
              <input
                id="height"
                value={this.state.height}
                onChange={e => this.setState({ height: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="weight">Weight</label>
              <input
                id="weight"
                value={this.state.weight}
                onChange={e => this.setState({ weight: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="hair">Hair</label>
              <input
                id="hair"
                value={this.state.hair}
                onChange={e => this.setState({ hair: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="eyes">Eyes</label>
              <input
                id="eyes"
                value={this.state.eyes}
                onChange={e => this.setState({ eyes: e.target.value })}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Summary;
