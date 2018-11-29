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
            <form className="defence-form">
              <p>Armour Class</p>
              {mapObjectToInputsWithAddBtn(
                obsDefence.armourClass,
                "Armour Class"
              )}
            </form>
            <form className="defence-form">
              <p>HP</p>
              {mapObjectToInputsWithAddBtn(obsDefence.hp, "HP")}
              <div>
                <label htmlFor="damageReduction">Damage Reduction</label>
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
              <div>
                <label htmlFor="spellResistance">Spell Resistance</label>
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
            </form>
            <form className="saving-throw-form">
              <p>Fortitude</p>
              {mapObjectToInputsWithAddBtn(obsDefence.fortitude, "Fortitude")}
              <p>Reflex</p>
              {mapObjectToInputsWithAddBtn(obsDefence.reflex, "Reflex")}
              <p>Will</p>
              {mapObjectToInputsWithAddBtn(obsDefence.will, "Will")}
              <p>Resist</p>
              {mapObjectToInputsWithAddBtn(obsDefence.resist, "Resist")}
            </form>
            <form className="defence-form">
              <div>
                <label htmlFor="immune">Immune</label>
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
              <p>Combat Manoeuvre Defence</p>
              {mapObjectToInputsWithAddBtn(
                obsDefence.combatManoeuvreDefence,
                "Combat Manoeuvre Defence"
              )}
            </form>
          </div>
        </div>
      );
    }
  }
);

export default Defence;
