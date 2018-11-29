import React, { Component } from "react";
import { observer } from "mobx-react";
import obsSpells from "./obsSpells";
import {
  mapObjectToInputsWithAddBtn,
  mapArrayOfObjectsToInputsWithAddBtn
} from "../../utils";
import ModalButton from "../Modal/ModalButton";
import AddSpell from "./AddSpell";

const Spells = observer(
  class Spells extends Component {
    render() {
      return (
        <div className="panel">
          <div className="panel-header">Spells</div>
          <div className="wrapper">
            <p>Use the + buttons to add the values to your Summary page!</p>
            <form className="spells-form">
              <p>Spells Known</p>
              {mapObjectToInputsWithAddBtn(
                obsSpells.spellsKnown,
                "Spells Known"
              )}
              <p>Spell DC</p>
              {mapObjectToInputsWithAddBtn(obsSpells.spellDc, "Spell DC")}
              <p>Spells Per Day</p>
              {mapObjectToInputsWithAddBtn(
                obsSpells.spellsPerDay,
                "Spells Per Day"
              )}
              <p>Bonus Spells</p>
              {mapObjectToInputsWithAddBtn(
                obsSpells.bonusSpells,
                "Bonus Spells"
              )}
              <div>
                <label htmlFor="conditionalModifiers">
                  Conditional Modifiers
                </label>
                <input
                  id="conditionalModifiers"
                  value={obsSpells.conditionalModifiers.value}
                  onChange={e =>
                    (obsSpells.conditionalModifiers.value = e.target.value)
                  }
                />
                <button
                  type="submit"
                  onClick={e => {
                    e.preventDefault();
                    obsSpells.conditionalModifiers.isHidden = false;
                  }}
                  className=""
                >
                  +
                </button>
              </div>
              <div>
                <label htmlFor="speciality">Speciality</label>
                <input
                  id="speciality"
                  value={obsSpells.speciality.value}
                  onChange={e => (obsSpells.speciality.value = e.target.value)}
                />
                <button
                  type="submit"
                  onClick={e => {
                    e.preventDefault();
                    obsSpells.speciality.isHidden = false;
                  }}
                  className=""
                >
                  +
                </button>
              </div>
              <p>Spell</p>
              {mapArrayOfObjectsToInputsWithAddBtn(obsSpells.spell, "Spell")}
              <ModalButton modalBtnText="Add Spell" modalBody={<AddSpell />} />
            </form>
          </div>
        </div>
      );
    }
  }
);

export default Spells;
