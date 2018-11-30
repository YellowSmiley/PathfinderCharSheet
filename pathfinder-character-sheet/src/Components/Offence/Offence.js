import React, { Component } from "react";
import { observer } from "mobx-react";
import obsOffence from "./obsOffence";
import {
  mapObjectToInputsWithAddBtn,
  mapArrayOfObjectsToInputsWithAddBtn
} from "../../utils";
import ModalButton from "../Modal/ModalButton";
import AddMeleeAttack from "./AddMeleeAttack";

const Offence = observer(
  class Offence extends Component {
    render() {
      /*TODO: Sort layout */
      return (
        <div className="panel">
          <div className="panel-header">Offence</div>
          <div className="wrapper">
            <p>Use the + buttons to add the values to your Summary page!</p>
            <form className="form-6-col">
              <p>Initiative</p>
              {mapObjectToInputsWithAddBtn(obsOffence.initiative, "Initiative")}
              <div>
                <label htmlFor="baseAttackBonus">Base Attack Bonus</label>
                <div className="inline-input-button">
                  <input
                    id="baseAttackBonus"
                    value={obsOffence.baseAttackBonus.value}
                    onChange={e =>
                      (obsOffence.baseAttackBonus.value = e.target.value)
                    }
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      obsOffence.baseAttackBonus.isHidden = false;
                    }}
                    className=""
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="conditionalModifiers">
                  Conditional Modifiers
                </label>
                <div className="inline-input-button">
                  <input
                    id="conditionalModifiers"
                    value={obsOffence.conditionalModifiers.value}
                    onChange={e =>
                      (obsOffence.conditionalModifiers.value = e.target.value)
                    }
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      obsOffence.conditionalModifiers.isHidden = false;
                    }}
                    className=""
                  >
                    +
                  </button>
                </div>
              </div>
              <p>Speed (Land)</p>
              {mapObjectToInputsWithAddBtn(obsOffence.speedLand, "Speed Land")}
            </form>
            <form className="form-7-col">
              <p>Combat Manoeuvre Bonus</p>
              {mapObjectToInputsWithAddBtn(
                obsOffence.combatManoeuvreBonus,
                "Combat Manoeuvre Bonus"
              )}
            </form>
            <p>Melee Attacks</p>
            <form className="form-6-col">
              {mapArrayOfObjectsToInputsWithAddBtn(
                obsOffence.meleeAttacks,
                "Melee Attacks"
              )}
            </form>
            <ModalButton
              modalBtnText="Add Melee Attack"
              modalBody={<AddMeleeAttack />}
            />
            <span className="spacer" />
          </div>
        </div>
      );
    }
  }
);

export default Offence;
