import React, { Component } from "react";

class Ability extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <div className="wrapper">
          <form>
            <div>
              <label htmlFor="abilityScore">Ability Score</label>
              <input
                id="abilityScore"
                value={this.props.abilityValues.abilityScore}
                onChange={e =>
                  this.props.handleAbilitiesChange(
                    this.props.name.toLowerCase(),
                    "abilityScore",
                    e.target.value
                  )
                }
              />
            </div>
            <div>
              <label htmlFor="abilityModifier">Ability Modifier</label>
              <input
                id="abilityModifier"
                value={this.props.abilityValues.abilityModifier}
                onChange={e =>
                  this.props.handleAbilitiesChange(
                    this.props.name.toLowerCase(),
                    "abilityModifier",
                    e.target.value
                  )
                }
              />
            </div>
            <div>
              <label htmlFor="tempScore">Temp Score</label>
              <input
                id="tempScore"
                value={this.props.abilityValues.tempScore}
                onChange={e =>
                  this.props.handleAbilitiesChange(
                    this.props.name.toLowerCase(),
                    "tempScore",
                    e.target.value
                  )
                }
              />
            </div>
            <div>
              <label htmlFor="tempModifier">Temp Modifier</label>
              <input
                id="tempModifier"
                value={this.props.abilityValues.tempModifier}
                onChange={e =>
                  this.props.handleAbilitiesChange(
                    this.props.name.toLowerCase(),
                    "tempModifier",
                    e.target.value
                  )
                }
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Ability;
