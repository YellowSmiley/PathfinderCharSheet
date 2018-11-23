import React, { Component } from "react";
import { observer } from "mobx-react";
import obsOffence from "./obsOffence";
import { mapObjectToInputs, mapArrayOfObjectsToInputs } from "../../utils";
import ModalButton from "../Modal/ModalButton";
import AddMeleeAttack from "./AddMeleeAttack";

const Offence = observer(
  class Offence extends Component {
    render() {
      return (
        <div className="panel">
          <div className="panel-header">Offence</div>
          <div className="wrapper">
            <form>
              <p>Initiative</p>
              {mapObjectToInputs(obsOffence.initiative, "Initiative")}
              <div>
                <label htmlFor="baseAttackBonus">Base Attack Bonus</label>
                <input
                  id="baseAttackBonus"
                  value={obsOffence.baseAttackBonus}
                  onChange={e => (obsOffence.baseAttackBonus = e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="conditionalModifiers">
                  Conditional Modifiers
                </label>
                <input
                  id="conditionalModifiers"
                  value={obsOffence.conditionalModifiers}
                  onChange={e =>
                    (obsOffence.conditionalModifiers = e.target.value)
                  }
                />
              </div>
              <p>Speed (Land)</p>
              {mapObjectToInputs(obsOffence.speedLand, "Speed Land")}
              <p>Combat Manoeuvre Bonus</p>
              {mapObjectToInputs(
                obsOffence.combatManoeuvreBonus,
                "Combat Manoeuvre Bonus"
              )}
              <p>Melee Attacks</p>
              {mapArrayOfObjectsToInputs(
                obsOffence.meleeAttacks,
                "Melee Attacks"
              )}
              <ModalButton
                modalBtnText="Add AC Item"
                modalBody={<AddMeleeAttack />}
              />
            </form>
          </div>
        </div>
      );
    }
  }
);

export default Offence;
