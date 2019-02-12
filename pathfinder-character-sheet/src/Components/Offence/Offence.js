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
      const offence = obsOffence.offence;
      return (
        <div className="panel">
          <div className="panel-header">Offence</div>
          <div className="wrapper">
            <p>Use the + buttons to add the values to your Summary page!</p>
            <form className="form-6-col">
              <p>Initiative</p>
              {mapObjectToInputsWithAddBtn(offence.initiative, "Initiative")}
              <div>
                <label htmlFor="baseAttackBonus">Base Attack Bonus</label>
                <div className="inline-input-button">
                  <input
                    id="baseAttackBonus"
                    value={offence.baseAttackBonus.value}
                    onChange={e =>
                      (offence.baseAttackBonus.value = e.target.value)
                    }
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      offence.baseAttackBonus.isHidden = false;
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
                    value={offence.conditionalModifiers.value}
                    onChange={e =>
                      (offence.conditionalModifiers.value = e.target.value)
                    }
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      offence.conditionalModifiers.isHidden = false;
                    }}
                    className=""
                  >
                    +
                  </button>
                </div>
              </div>
              <p>Speed (Land)</p>
              {mapObjectToInputsWithAddBtn(offence.speedLand, "Speed Land")}
            </form>
            <form className="form-7-col">
              <p>Combat Manoeuvre Bonus</p>
              {mapObjectToInputsWithAddBtn(
                offence.combatManoeuvreBonus,
                "Combat Manoeuvre Bonus"
              )}
            </form>
            <p>Melee Attacks</p>
            <form className="form-7-col">
              {mapArrayOfObjectsToInputsWithAddBtn(
                offence.meleeAttacks,
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
