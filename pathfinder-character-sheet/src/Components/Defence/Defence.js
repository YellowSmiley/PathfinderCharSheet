import React, { Component } from "react";
import { observer } from "mobx-react";
import obsDefence from "./obsDefence";
import { mapObjectToInputs } from "../../utils";

const Defence = observer(
  class Defence extends Component {
    render() {
      return (
        <div className="panel">
          <div className="panel-header">Defence</div>
          <div className="wrapper">
            <form>
              <p>Armour Class</p>
              {mapObjectToInputs(obsDefence.armourClass, "Armour Class")}
              <p>HP</p>
              {mapObjectToInputs(obsDefence.hp, "HP")}
              <div>
                <label htmlFor="damageReduction">Damage Reduction</label>
                <input
                  id="damageReduction"
                  value={obsDefence.damageReduction}
                  onChange={e => (obsDefence.damageReduction = e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="spellResistance">Spell Resistance</label>
                <input
                  id="spellResistance"
                  value={obsDefence.spellResistance}
                  onChange={e => (obsDefence.spellResistance = e.target.value)}
                />
              </div>
              <p>Fortitude</p>
              {mapObjectToInputs(obsDefence.fortitude, "Fortitude")}
              <p>Reflex</p>
              {mapObjectToInputs(obsDefence.reflex, "Reflex")}
              <p>Will</p>
              {mapObjectToInputs(obsDefence.will, "Will")}
              <p>Resist</p>
              {mapObjectToInputs(obsDefence.resist, "Resist")}
              <div>
                <label htmlFor="immune">Immune</label>
                <input
                  id="immune"
                  value={obsDefence.immune}
                  onChange={e => (obsDefence.immune = e.target.value)}
                />
              </div>
              <p>Combat Manoeuvre Defence</p>
              {mapObjectToInputs(
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
