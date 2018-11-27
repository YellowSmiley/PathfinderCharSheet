import React, { Component } from "react";
import { observer } from "mobx-react";
import obsAbilities from "./obsAbilities";
import { mapObjectToInputs } from "../../utils";

const Abilities = observer(
  class Abilities extends Component {
    render() {
      return (
        <div className="panel">
          <div className="panel-header">Abilities</div>
          <div className="wrapper">
            <form>
              <p>Strength</p>
              {mapObjectToInputs(obsAbilities.strength, "Strength")}
              <p>Dexterity</p>
              {mapObjectToInputs(obsAbilities.dexterity, "Dexterity")}
              <p>Constitution</p>
              {mapObjectToInputs(obsAbilities.constitution, "Constitution")}
              <p>Intelligence</p>
              {mapObjectToInputs(obsAbilities.intelligence, "Intelligence")}
              <p>Wisdom</p>
              {mapObjectToInputs(obsAbilities.wisdom, "Wisdom")}
              <p>Charisma</p>
              {mapObjectToInputs(obsAbilities.charisma, "Charisma")}
            </form>
          </div>
        </div>
      );
    }
  }
);

export default Abilities;
