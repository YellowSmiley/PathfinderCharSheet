import React, { Component } from "react";
import { observer } from "mobx-react";
import obsSkills from "./obsSkills";
import { mapObjectToInputs, mapArrayOfObjectsToInputs } from "../../utils";
import ModalButton from "../Modal/ModalButton";
import AddSkill from "./AddSkill";

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
              <ModalButton
                modalBtnText="Add Knowledge"
                modalBody={<AddSkill array={obsSkills.knowledge} />}
              />
              <p>Linguistics</p>
              {mapObjectToInputs(obsSkills.linguistics, "Linguistics")}
              <p>Perception</p>
              {mapObjectToInputs(obsSkills.perception, "Perception")}
              <p>Perform</p>
              {mapArrayOfObjectsToInputs(obsSkills.perform, "Perform")}
              <ModalButton
                modalBtnText="Add Perform"
                modalBody={<AddSkill array={obsSkills.perform} />}
              />
              <p>Profession</p>
              {mapArrayOfObjectsToInputs(obsSkills.profession, "Profession")}
              <ModalButton
                modalBtnText="Add Profession"
                modalBody={<AddSkill array={obsSkills.profession} />}
              />
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
              <p>Survival</p>
              {mapObjectToInputs(obsSkills.survival, "Survival")}
              <p>Swim</p>
              {mapObjectToInputs(obsSkills.swim, "Swim")}
              <p>Use Magic Device</p>
              {mapObjectToInputs(obsSkills.useMagicDevice, "Use Magic Device")}
              <div>
                <label htmlFor="conditionalModifiersAndOtherNotes">
                  Conditional Modifiers &amp; Other Notes
                </label>
                <input
                  id="conditionalModifiersAndOtherNotes"
                  value={obsSkills.conditionalModifiersAndOtherNotes}
                  onChange={e =>
                    (obsSkills.conditionalModifiersAndOtherNotes =
                      e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="languages">Languages</label>
                <input
                  id="languages"
                  value={obsSkills.languages}
                  onChange={e => (obsSkills.languages = e.target.value)}
                />
              </div>
              <p>Experience Points</p>
              {mapObjectToInputs(
                obsSkills.experiencePoints,
                "Experience Points"
              )}
            </form>
          </div>
        </div>
      );
    }
  }
);

export default Skills;
