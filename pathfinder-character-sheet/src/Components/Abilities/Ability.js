import React, { Component } from "react";
import { AbilityContext } from "./AbilityContext";

class Ability extends Component {
  render() {
    let ability = this.context;
    return (
      <div>
        <p>{this.props.name}</p>
        <div className="wrapper">
          <form>
            <div>
              <label htmlFor="abilityScore">Ability Score</label>
              <input
                id="abilityScore"
                value={ability.abilityScore}
                onChange={e => this.setState({ abilityScore: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="abilityModifier">Ability Modifier</label>
              <input
                id="abilityModifier"
                value={ability.abilityModifier}
                onChange={e =>
                  this.setState({ abilityModifier: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="tempScore">Temp Score</label>
              <input
                id="tempScore"
                value={ability.tempScore}
                onChange={e => this.setState({ tempScore: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="tempModifier">Temp Modifier</label>
              <input
                id="tempModifier"
                value={ability.tempModifier}
                onChange={e => this.setState({ tempModifier: e.target.value })}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
Ability.contextType = AbilityContext;

export default Ability;
