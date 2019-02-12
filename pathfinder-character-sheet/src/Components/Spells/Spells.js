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
      const spells = obsSpells.spells;
      return (
        <div className="panel">
          <div className="panel-header">Spells</div>
          <div className="wrapper">
            <p>Use the + buttons to add the values to your Summary page!</p>
            <form className="form-11-col">
              <p>Spells Known</p>
              {mapObjectToInputsWithAddBtn(spells.spellsKnown, "Spells Known")}
              <p>Spell DC</p>
              {mapObjectToInputsWithAddBtn(spells.spellDc, "Spell DC")}
              <p>Spells Per Day</p>
              {mapObjectToInputsWithAddBtn(
                spells.spellsPerDay,
                "Spells Per Day"
              )}
              <p>Bonus Spells</p>
              {mapObjectToInputsWithAddBtn(spells.bonusSpells, "Bonus Spells")}
            </form>
            <form className="form-4-col">
              <div>
                <label htmlFor="conditionalModifiers">
                  Conditional Modifiers
                </label>
                <div className="inline-input-button">
                  <input
                    id="conditionalModifiers"
                    value={spells.conditionalModifiers.value}
                    onChange={e =>
                      (spells.conditionalModifiers.value = e.target.value)
                    }
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      spells.conditionalModifiers.isHidden = false;
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
                    value={spells.speciality.value}
                    onChange={e => (spells.speciality.value = e.target.value)}
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      spells.speciality.isHidden = false;
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
              {mapArrayOfObjectsToInputsWithAddBtn(spells.spell, "Spell")}
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
