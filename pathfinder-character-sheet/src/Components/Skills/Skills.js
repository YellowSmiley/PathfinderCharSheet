import React, { Component } from "react";
import { observer } from "mobx-react";
import obsSkills from "./obsSkills";
import { mapObjectToInputs, mapArrayOfObjectsToInputs } from "../../utils";

const Skills = observer(
  class Skills extends Component {
    render() {
      return (
        <div className="panel">
          <div className="panel-header">Skills</div>
          <div className="wrapper">
            <form>
              <p>Acrobatics</p>
              {mapObjectToInputs(obsSkills.acrobatics, "Acrobatics")}
              <p>Appraise</p>
              {mapObjectToInputs(obsSkills.appraise, "Appraise")}
              <p>Bluff</p>
              {mapObjectToInputs(obsSkills.bluff, "Bluff")}
              <p>Climb</p>
              {mapObjectToInputs(obsSkills.climb, "Climb")}
              <p>Craft</p>
              {mapObjectToInputs(obsSkills.craft, "Craft")}
              <p>Diplomacy</p>
              {mapObjectToInputs(obsSkills.diplomacy, "Diplomacy")}
              <p>Disable Device</p>
              {mapObjectToInputs(obsSkills.disableDevice, "Disable Device")}
              <p>Disguise</p>
              {mapObjectToInputs(obsSkills.disguise, "Disguise")}
              <p>Escape Artist</p>
              {mapObjectToInputs(obsSkills.escapeArtist, "Escape Artist")}
              <p>Fly</p>
              {mapObjectToInputs(obsSkills.fly, "Fly")}
              <p>Handle Animal</p>
              {mapObjectToInputs(obsSkills.handleAnimal, "Handle Animal")}
              <p>Heal</p>
              {mapObjectToInputs(obsSkills.heal, "Heal")}
              <p>Intimidate</p>
              {mapObjectToInputs(obsSkills.intimidate, "Intimidate")}
              <p>Knowledge</p>
              {mapArrayOfObjectsToInputs(obsSkills.knowledge, "Knowledge")}
              {/*TODO: Add ability to add items to obsSkills.knowledge*/}
              <p>Linguistics</p>
              {mapObjectToInputs(obsSkills.linguistics, "Linguistics")}
              <p>Perception</p>
              {mapObjectToInputs(obsSkills.perception, "Perception")}
              <p>Perform</p>
              {mapArrayOfObjectsToInputs(obsSkills.perform, "Perform")}
              {/*TODO: Add ability to add items to obsSkills.perform*/}
              <p>Profession</p>
              {mapArrayOfObjectsToInputs(obsSkills.profession, "Profession")}
              {/*TODO: Add ability to add items to obsSkills.profession*/}
              <p>Ride</p>
              {mapObjectToInputs(obsSkills.ride, "Ride")}
              <p>Sense Motive</p>
              {mapObjectToInputs(obsSkills.senseMotive, "Sense Motive")}
              <p>Sleight Of Hand</p>
              {mapObjectToInputs(obsSkills.sleightOfHand, "Sleight Of Hand")}
              <p>Spellcraft</p>
              {mapObjectToInputs(obsSkills.spellcraft, "Spellcraft")}
              <p>Stealth</p>
              {mapObjectToInputs(obsSkills.stealth, "Stealth")}
              <div>
                <label htmlFor="baseAttackBonus">Base Attack Bonus</label>
                <input
                  id="baseAttackBonus"
                  value={obsSkills.baseAttackBonus}
                  onChange={e => (obsSkills.baseAttackBonus = e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="conditionalModifiers">
                  Conditional Modifiers
                </label>
                <input
                  id="conditionalModifiers"
                  value={obsSkills.conditionalModifiers}
                  onChange={e =>
                    (obsSkills.conditionalModifiers = e.target.value)
                  }
                />
              </div>
              <p>Speed (Land)</p>
              {mapObjectToInputs(obsSkills.speedLand, "Speed Land")}
              <p>Combat Manoeuvre Bonus</p>
              {mapObjectToInputs(
                obsSkills.combatManoeuvreBonus,
                "Combat Manoeuvre Bonus"
              )}
              <p>Melee Attacks</p>
              {mapArrayOfObjectsToInputs(
                obsSkills.meleeAttacks,
                "Melee Attacks"
              )}
              {/*TODO: Add ability to add items to obsSkills.meleeAttacks*/}
            </form>
          </div>
        </div>
      );
    }
  }
);

export default Skills;
