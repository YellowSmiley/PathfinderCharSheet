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
      return (
        <div className="panel">
          <div className="panel-header">Offence</div>
          <div className="wrapper">
            <form>
              <p>Initiative</p>
              {mapObjectToInputsWithAddBtn(obsOffence.initiative, "Initiative")}
              <div>
                <label htmlFor="baseAttackBonus">Base Attack Bonus</label>
                <input
                  id="baseAttackBonus"
                  value={obsOffence.baseAttackBonus.value}
                  onChange={e =>
                    (obsOffence.baseAttackBonus.value = e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="conditionalModifiers">
                  Conditional Modifiers
                </label>
                <input
                  id="conditionalModifiers"
                  value={obsOffence.conditionalModifiers.value}
                  onChange={e =>
                    (obsOffence.conditionalModifiers.value = e.target.value)
                  }
                />
              </div>
              <p>Speed (Land)</p>
              {mapObjectToInputsWithAddBtn(obsOffence.speedLand, "Speed Land")}
              <p>Combat Manoeuvre Bonus</p>
              {mapObjectToInputsWithAddBtn(
                obsOffence.combatManoeuvreBonus,
                "Combat Manoeuvre Bonus"
              )}
              <p>Melee Attacks</p>
              {mapArrayOfObjectsToInputsWithAddBtn(
                obsOffence.meleeAttacks,
                "Melee Attacks"
              )}
              <ModalButton
                modalBtnText="Add Melee Attack"
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
