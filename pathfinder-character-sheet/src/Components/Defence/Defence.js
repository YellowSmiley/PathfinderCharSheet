import React, { Component } from "react";
import { observer } from "mobx-react";
import obsDefence from "./obsDefence";
import { mapObjectToInputsWithAddBtn } from "../../utils";

const Defence = observer(
  class Defence extends Component {
    render() {
      /*TODO: Sort layout */
      const defence = obsDefence.defence;
      return (
        <div className="panel">
          <div className="panel-header">Defence</div>
          <div className="wrapper">
            <p>Use the + buttons to add the values to your Summary page!</p>
            <form className="form-12-col">
              <p>Armour Class</p>
              {mapObjectToInputsWithAddBtn(defence.armourClass, "Armour Class")}
            </form>
            <form className="form-6-col">
              <p>HP</p>
              {mapObjectToInputsWithAddBtn(defence.hp, "HP")}
              <div>
                <label htmlFor="damageReduction">Damage Reduction</label>
                <div className="inline-input-button">
                  <input
                    id="damageReduction"
                    value={defence.damageReduction.value}
                    onChange={e =>
                      (defence.damageReduction.value = e.target.value)
                    }
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      defence.damageReduction.isHidden = false;
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
                    value={defence.spellResistance.value}
                    onChange={e =>
                      (defence.spellResistance.value = e.target.value)
                    }
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      defence.spellResistance.isHidden = false;
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
              {mapObjectToInputsWithAddBtn(defence.fortitude, "Fortitude")}
              <p>Reflex</p>
              {mapObjectToInputsWithAddBtn(defence.reflex, "Reflex")}
              <p>Will</p>
              {mapObjectToInputsWithAddBtn(defence.will, "Will")}
              <p>Resist</p>
              {mapObjectToInputsWithAddBtn(defence.resist, "Resist")}
              <p>Combat Manoeuvre Defence</p>
              {mapObjectToInputsWithAddBtn(
                defence.combatManoeuvreDefence,
                "Combat Manoeuvre Defence"
              )}
            </form>
            <form className="form-7-col">
              <p>Immune</p>
              <div>
                <div className="inline-input-button">
                  <input
                    id="immune"
                    value={defence.immune.value}
                    onChange={e => (defence.immune.value = e.target.value)}
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      defence.immune.isHidden = false;
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
