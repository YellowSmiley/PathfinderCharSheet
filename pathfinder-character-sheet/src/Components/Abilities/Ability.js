import React, { Component } from "react";
import { reduxX } from "../../reduxx";

function handleAbilitiesChange(type, abilityValue, value) {
  let newAbilities = this.state.abilities;
  switch (type) {
    case "strength":
      switch (abilityValue) {
        case "abilityScore":
          newAbilities.strength.abilityScore = value;
          break;
        case "abilityModifier":
          newAbilities.strength.abilityModifier = value;
          break;
        case "tempScore":
          newAbilities.strength.tempScore = value;
          break;
        case "tempModifier":
          newAbilities.strength.tempModifier = value;
          break;
        default:
          return false;
      }
      break;
    case "dexterity":
      switch (abilityValue) {
        case "abilityScore":
          newAbilities.dexterity.abilityScore = value;
          break;
        case "abilityModifier":
          newAbilities.dexterity.abilityModifier = value;
          break;
        case "tempScore":
          newAbilities.dexterity.tempScore = value;
          break;
        case "tempModifier":
          newAbilities.dexterity.tempModifier = value;
          break;
        default:
          return false;
      }
      break;
    case "constitution":
      switch (abilityValue) {
        case "abilityScore":
          newAbilities.constitution.abilityScore = value;
          break;
        case "abilityModifier":
          newAbilities.constitution.abilityModifier = value;
          break;
        case "tempScore":
          newAbilities.constitution.tempScore = value;
          break;
        case "tempModifier":
          newAbilities.constitution.tempModifier = value;
          break;
        default:
          return false;
      }
      break;
    case "intelligence":
      switch (abilityValue) {
        case "abilityScore":
          newAbilities.intelligence.abilityScore = value;
          break;
        case "abilityModifier":
          newAbilities.intelligence.abilityModifier = value;
          break;
        case "tempScore":
          newAbilities.intelligence.tempScore = value;
          break;
        case "tempModifier":
          newAbilities.intelligence.tempModifier = value;
          break;
        default:
          return false;
      }
      break;
    case "wisdom":
      switch (abilityValue) {
        case "abilityScore":
          newAbilities.wisdom.abilityScore = value;
          break;
        case "abilityModifier":
          newAbilities.wisdom.abilityModifier = value;
          break;
        case "tempScore":
          newAbilities.wisdom.tempScore = value;
          break;
        case "tempModifier":
          newAbilities.wisdom.tempModifier = value;
          break;
        default:
          return false;
      }
      break;
    case "charisma":
      switch (abilityValue) {
        case "abilityScore":
          newAbilities.charisma.abilityScore = value;
          break;
        case "abilityModifier":
          newAbilities.charisma.abilityModifier = value;
          break;
        case "tempScore":
          newAbilities.charisma.tempScore = value;
          break;
        case "tempModifier":
          newAbilities.charisma.tempModifier = value;
          break;
        default:
          return false;
      }
      break;
    default:
      return false;
  }
  ReduxX.setState({ abilities: newAbilities });
}

class Ability extends Component {
  constructor(props) {
    super(props);

    this.handleChangeAbility = this.handleChangeAbility.bind(this);
  }

  handleChangeAbility(value, ability) {
    this.props.changeAbility(this.props.name.toLowerCase(), ability, value);
  }

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
                value={reduxX.getState(
                  "abilities",
                  this.props.name.toLowerCase(),
                  "abilityScore"
                )}
                onChange={e =>
                  handleAbilitiesChange(
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
                value={reduxX.getState(
                  "abilities",
                  this.props.name.toLowerCase(),
                  "abilityModifier"
                )}
                onChange={e =>
                  handleAbilitiesChange(
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
                value={reduxX.getState(
                  "abilities",
                  this.props.name.toLowerCase(),
                  "tempScore"
                )}
                onChange={e =>
                  handleAbilitiesChange(
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
                value={reduxX.getState(
                  "abilities",
                  this.props.name.toLowerCase(),
                  "tempModifier"
                )}
                onChange={e =>
                  handleAbilitiesChange(
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
