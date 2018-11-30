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
            <form className="form-11-col">
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
            </form>
            <form className="form-4-col">
              <div>
                <label htmlFor="conditionalModifiers">
                  Conditional Modifiers
                </label>
                <div className="inline-input-button">
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
              </div>
              <div>
                <label htmlFor="speciality">Speciality</label>
                <div className="inline-input-button">
                  <input
                    id="speciality"
                    value={obsSpells.speciality.value}
                    onChange={e =>
                      (obsSpells.speciality.value = e.target.value)
                    }
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
              </div>
            </form>
            <p>Spell</p>
            <form className="form-9-col">
              {mapArrayOfObjectsToInputsWithAddBtn(obsSpells.spell, "Spell")}
            </form>
            <ModalButton modalBtnText="Add Spell" modalBody={<AddSpell />} />
            <span className="spacer" />
          </div>
        </div>
      );
    }
  }
);

export default Spells;
