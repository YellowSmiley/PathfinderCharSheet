import React, { Component } from "react";
import { observer } from "mobx-react";
import obsGeneral from "./obsGeneral";

const General = observer(
  class General extends Component {
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
                  value={obsGeneral.characterName}
                  onChange={e => (obsGeneral.characterName = e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="alignment">Alignment</label>
                <input
                  id="alignment"
                  value={obsGeneral.alignment}
                  onChange={e => (obsGeneral.alignment = e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="playerName">Player Name</label>
                <input
                  id="playerName"
                  value={obsGeneral.playerName}
                  onChange={e => (obsGeneral.playerName = e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="characterClassLevel">
                  Character Class &amp; Level
                </label>
                <input
                  id="characterClassLevel"
                  value={obsGeneral.characterClassLevel}
                  onChange={e =>
                    (obsGeneral.characterClassLevel = e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="deity">Deity</label>
                <input
                  id="deity"
                  value={obsGeneral.deity}
                  onChange={e => (obsGeneral.deity = e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="homeland">Homeland</label>
                <input
                  id="homeland"
                  value={obsGeneral.homeland}
                  onChange={e => (obsGeneral.homeland = e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="race">Race</label>
                <input
                  id="race"
                  value={obsGeneral.race}
                  onChange={e => (obsGeneral.race = e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="size">Size</label>
                <input
                  id="size"
                  value={obsGeneral.size}
                  onChange={e => (obsGeneral.size = e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <input
                  id="gender"
                  value={obsGeneral.gender}
                  onChange={e => (obsGeneral.gender = e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="age">Age</label>
                <input
                  id="age"
                  value={obsGeneral.age}
                  onChange={e => (obsGeneral.age = e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="height">Height</label>
                <input
                  id="height"
                  value={obsGeneral.height}
                  onChange={e => (obsGeneral.height = e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="weight">Weight</label>
                <input
                  id="weight"
                  value={obsGeneral.weight}
                  onChange={e => (obsGeneral.weight = e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="hair">Hair</label>
                <input
                  id="hair"
                  value={obsGeneral.hair}
                  onChange={e => (obsGeneral.hair = e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="eyes">Eyes</label>
                <input
                  id="eyes"
                  value={obsGeneral.eyes}
                  onChange={e => (obsGeneral.eyes = e.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
);

export default General;
