import React, { Component } from "react";
import { observer } from "mobx-react";
import obsSkills from "./obsSkills";
import {
  mapObjectToInputsWithAddBtn,
  mapArrayOfObjectsToInputsWithAddBtn
} from "../../utils";
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
              {mapObjectToInputsWithAddBtn(obsSkills.acrobatics, "Acrobatics")}
              <p>Appraise</p>
              {mapObjectToInputsWithAddBtn(obsSkills.appraise, "Appraise")}
              <p>Bluff</p>
              {mapObjectToInputsWithAddBtn(obsSkills.bluff, "Bluff")}
              <p>Climb</p>
              {mapObjectToInputsWithAddBtn(obsSkills.climb, "Climb")}
              <p>Craft</p>
              {mapObjectToInputsWithAddBtn(obsSkills.craft, "Craft")}
              <p>Diplomacy</p>
              {mapObjectToInputsWithAddBtn(obsSkills.diplomacy, "Diplomacy")}
              <p>Disable Device</p>
              {mapObjectToInputsWithAddBtn(
                obsSkills.disableDevice,
                "Disable Device"
              )}
              <p>Disguise</p>
              {mapObjectToInputsWithAddBtn(obsSkills.disguise, "Disguise")}
              <p>Escape Artist</p>
              {mapObjectToInputsWithAddBtn(
                obsSkills.escapeArtist,
                "Escape Artist"
              )}
              <p>Fly</p>
              {mapObjectToInputsWithAddBtn(obsSkills.fly, "Fly")}
              <p>Handle Animal</p>
              {mapObjectToInputsWithAddBtn(
                obsSkills.handleAnimal,
                "Handle Animal"
              )}
              <p>Heal</p>
              {mapObjectToInputsWithAddBtn(obsSkills.heal, "Heal")}
              <p>Intimidate</p>
              {mapObjectToInputsWithAddBtn(obsSkills.intimidate, "Intimidate")}
              <p>Knowledge</p>
              {mapArrayOfObjectsToInputsWithAddBtn(
                obsSkills.knowledge,
                "Knowledge"
              )}
              <ModalButton
                modalBtnText="Add Knowledge"
                modalBody={<AddSkill array={obsSkills.knowledge} />}
              />
              <p>Linguistics</p>
              {mapObjectToInputsWithAddBtn(
                obsSkills.linguistics,
                "Linguistics"
              )}
              <p>Perception</p>
              {mapObjectToInputsWithAddBtn(obsSkills.perception, "Perception")}
              <p>Perform</p>
              {mapArrayOfObjectsToInputsWithAddBtn(
                obsSkills.perform,
                "Perform"
              )}
              <ModalButton
                modalBtnText="Add Perform"
                modalBody={<AddSkill array={obsSkills.perform} />}
              />
              <p>Profession</p>
              {mapArrayOfObjectsToInputsWithAddBtn(
                obsSkills.profession,
                "Profession"
              )}
              <ModalButton
                modalBtnText="Add Profession"
                modalBody={<AddSkill array={obsSkills.profession} />}
              />
              <p>Ride</p>
              {mapObjectToInputsWithAddBtn(obsSkills.ride, "Ride")}
              <p>Sense Motive</p>
              {mapObjectToInputsWithAddBtn(
                obsSkills.senseMotive,
                "Sense Motive"
              )}
              <p>Sleight Of Hand</p>
              {mapObjectToInputsWithAddBtn(
                obsSkills.sleightOfHand,
                "Sleight Of Hand"
              )}
              <p>Spellcraft</p>
              {mapObjectToInputsWithAddBtn(obsSkills.spellcraft, "Spellcraft")}
              <p>Stealth</p>
              {mapObjectToInputsWithAddBtn(obsSkills.stealth, "Stealth")}
              <p>Survival</p>
              {mapObjectToInputsWithAddBtn(obsSkills.survival, "Survival")}
              <p>Swim</p>
              {mapObjectToInputsWithAddBtn(obsSkills.swim, "Swim")}
              <p>Use Magic Device</p>
              {mapObjectToInputsWithAddBtn(
                obsSkills.useMagicDevice,
                "Use Magic Device"
              )}
              <div>
                <label htmlFor="conditionalModifiersAndOtherNotes">
                  Conditional Modifiers &amp; Other Notes
                </label>
                <input
                  id="conditionalModifiersAndOtherNotes"
                  value={obsSkills.conditionalModifiersAndOtherNotes.value}
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
                  value={obsSkills.languages.value}
                  onChange={e => (obsSkills.languages = e.target.value)}
                />
              </div>
              <p>Experience Points</p>
              {mapObjectToInputsWithAddBtn(
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
