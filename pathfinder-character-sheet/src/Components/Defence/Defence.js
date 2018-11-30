import React, { Component } from "react";
import { observer } from "mobx-react";
import obsDefence from "./obsDefence";
import { mapObjectToInputsWithAddBtn } from "../../utils";

const Defence = observer(
  class Defence extends Component {
    render() {
      /*TODO: Sort layout */
      return (
        <div className="panel">
          <div className="panel-header">Defence</div>
          <div className="wrapper">
            <p>Use the + buttons to add the values to your Summary page!</p>
            <form className="form-12-col">
              <p>Armour Class</p>
              {mapObjectToInputsWithAddBtn(
                obsDefence.armourClass,
                "Armour Class"
              )}
            </form>
            <form className="form-6-col">
              <p>HP</p>
              {mapObjectToInputsWithAddBtn(obsDefence.hp, "HP")}
              <div>
                <label htmlFor="damageReduction">Damage Reduction</label>
                <div className="inline-input-button">
                  <input
                    id="damageReduction"
                    value={obsDefence.damageReduction.value}
                    onChange={e =>
                      (obsDefence.damageReduction.value = e.target.value)
                    }
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      obsDefence.damageReduction.isHidden = false;
                    }}
                    className=""
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="spellResistance">Spell Resistance</label>
                <div className="inline-input-button">
                  <input
                    id="spellResistance"
                    value={obsDefence.spellResistance.value}
                    onChange={e =>
                      (obsDefence.spellResistance.value = e.target.value)
                    }
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      obsDefence.spellResistance.isHidden = false;
                    }}
                    className=""
                  >
                    +
                  </button>
                </div>
              </div>
            </form>
            <form className="form-8-col">
              <p>Fortitude</p>
              {mapObjectToInputsWithAddBtn(obsDefence.fortitude, "Fortitude")}
              <p>Reflex</p>
              {mapObjectToInputsWithAddBtn(obsDefence.reflex, "Reflex")}
              <p>Will</p>
              {mapObjectToInputsWithAddBtn(obsDefence.will, "Will")}
              <p>Resist</p>
              {mapObjectToInputsWithAddBtn(obsDefence.resist, "Resist")}
              <p>Combat Manoeuvre Defence</p>
              {mapObjectToInputsWithAddBtn(
                obsDefence.combatManoeuvreDefence,
                "Combat Manoeuvre Defence"
              )}
            </form>
            <form className="form-7-col">
              <p>Immune</p>
              <div>
                <div className="inline-input-button">
                  <input
                    id="immune"
                    value={obsDefence.immune.value}
                    onChange={e => (obsDefence.immune.value = e.target.value)}
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      obsDefence.immune.isHidden = false;
                    }}
                    className=""
                  >
                    +
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
);

export default Defence;
