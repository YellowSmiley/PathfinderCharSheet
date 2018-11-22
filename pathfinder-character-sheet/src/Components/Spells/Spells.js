import React, { Component } from "react";
import { observer } from "mobx-react";
import obsSpells from "./obsSpells";
import { mapObjectToInputs, mapArrayOfObjectsToInputs } from "../../utils";

const Spells = observer(
  class Spells extends Component {
    render() {
      return (
        <div className="panel">
          <div className="panel-header">Spells</div>
          <div className="wrapper">
            <form>
              <p>Spells Known</p>
              {mapObjectToInputs(obsSpells.spellsKnown, "Spells Known")}
              <p>Spell DC</p>
              {mapObjectToInputs(obsSpells.spellDc, "Spell DC")}
              <p>Spells Per Day</p>
              {mapObjectToInputs(obsSpells.spellsPerDay, "Spells Per Day")}
              <p>Bonus Spells</p>
              {mapObjectToInputs(obsSpells.bonusSpells, "Bonus Spells")}
              <div>
                <label htmlFor="conditionalModifiers">
                  Conditional Modifiers
                </label>
                <input
                  id="conditionalModifiers"
                  value={obsSpells.conditionalModifiers}
                  onChange={e =>
                    (obsSpells.conditionalModifiers = e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="speciality">Speciality</label>
                <input
                  id="speciality"
                  value={obsSpells.speciality}
                  onChange={e => (obsSpells.speciality = e.target.value)}
                />
              </div>
              <p>Spell</p>
              {mapArrayOfObjectsToInputs(obsSpells.spell, "Spell")}
              {/*TODO: Add ability to add items to obsSpells.spell*/}
            </form>
          </div>
        </div>
      );
    }
  }
);

export default Spells;
