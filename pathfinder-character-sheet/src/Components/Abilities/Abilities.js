import React, { Component } from "react";
import { observer } from "mobx-react";
import obsAbilities from "./obsAbilities";
import { mapObjectToInputsWithAddBtn } from "../../utils";

const Abilities = observer(
  class Abilities extends Component {
    render() {
      /*TODO: map corresponding values like totals of the other values */
      const abilities = obsAbilities.abilities;
      return (
        <div className="panel">
          <div className="panel-header">Abilities</div>
          <div className="wrapper">
            <p>Use the + buttons to add the values to your Summary page!</p>
            <form className="form-5-col">
              <p>Strength</p>
              {mapObjectToInputsWithAddBtn(abilities.strength, "Strength")}
              <p>Dexterity</p>
              {mapObjectToInputsWithAddBtn(abilities.dexterity, "Dexterity")}
              <p>Constitution</p>
              {mapObjectToInputsWithAddBtn(
                abilities.constitution,
                "Constitution"
              )}
              <p>Intelligence</p>
              {mapObjectToInputsWithAddBtn(
                abilities.intelligence,
                "Intelligence"
              )}
              <p>Wisdom</p>
              {mapObjectToInputsWithAddBtn(abilities.wisdom, "Wisdom")}
              <p>Charisma</p>
              {mapObjectToInputsWithAddBtn(abilities.charisma, "Charisma")}
            </form>
          </div>
        </div>
      );
    }
  }
);

export default Abilities;
