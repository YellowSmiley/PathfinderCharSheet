import React, { Component } from "react";
import { observer } from "mobx-react";
import obsAbilities from "./obsAbilities";

const Ability = observer(
  class Ability extends Component {
    constructor(props) {
      super(props);
      this.handleChangeAbility = this.handleChangeAbility.bind(this);
    }

    handleChangeAbility(abilityValue, e) {
      obsAbilities.handleAbilitiesChange(
        this.props.name.toLowerCase(),
        abilityValue,
        e.target.value
      );
    }

    render() {
      const abilityValues = obsAbilities.getAbilityValueOnType(
        this.props.name.toLowerCase()
      );
      return (
        <div>
          <p>{this.props.name}</p>
          <div className="wrapper">
            <form>
              <div>
                <label htmlFor="abilityScore">Ability Score</label>
                <input
                  id="abilityScore"
                  value={abilityValues.abilityScore}
                  onChange={e => this.handleChangeAbility("abilityScore", e)}
                />
              </div>
              <div>
                <label htmlFor="abilityModifier">Ability Modifier</label>
                <input
                  id="abilityModifier"
                  value={abilityValues.abilityModifier}
                  onChange={e => this.handleChangeAbility("abilityModifier", e)}
                />
              </div>
              <div>
                <label htmlFor="tempScore">Temp Score</label>
                <input
                  id="tempScore"
                  value={abilityValues.tempScore}
                  onChange={e => this.handleChangeAbility("tempScore", e)}
                />
              </div>
              <div>
                <label htmlFor="tempModifier">Temp Modifier</label>
                <input
                  id="tempModifier"
                  value={abilityValues.tempModifier}
                  onChange={e => this.handleChangeAbility("tempModifier", e)}
                />
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
);

export default Ability;
