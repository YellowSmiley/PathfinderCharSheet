import React, { Component } from "react";
import { observer } from "mobx-react";
import obsAbilities from "./obsAbilities";
import { mapObjectToInputsWithAddBtn } from "../../utils";

const Abilities = observer(
  class Abilities extends Component {
    render() {
      return (
        <div className="panel">
          <div className="panel-header">Abilities</div>
          <div className="wrapper">
            <form>
              <p>Strength</p>
              {mapObjectToInputsWithAddBtn(obsAbilities.strength, "Strength")}
              <p>Dexterity</p>
              {mapObjectToInputsWithAddBtn(obsAbilities.dexterity, "Dexterity")}
              <p>Constitution</p>
              {mapObjectToInputsWithAddBtn(
                obsAbilities.constitution,
                "Constitution"
              )}
              <p>Intelligence</p>
              {mapObjectToInputsWithAddBtn(
                obsAbilities.intelligence,
                "Intelligence"
              )}
              <p>Wisdom</p>
              {mapObjectToInputsWithAddBtn(obsAbilities.wisdom, "Wisdom")}
              <p>Charisma</p>
              {mapObjectToInputsWithAddBtn(obsAbilities.charisma, "Charisma")}
            </form>
          </div>
        </div>
      );
    }
  }
);

export default Abilities;
