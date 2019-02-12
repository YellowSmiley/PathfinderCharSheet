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
      /* TODO: Sort out messy alignment and floating add skill btns */
      const skills = obsSkills.skills;
      return (
        <div className="panel">
          <div className="panel-header">Skills</div>
          <div className="wrapper">
            <p>Use the + buttons to add the values to your Summary page!</p>
            <form className="form-12-col">
              <p>Acrobatics</p>
              {mapObjectToInputsWithAddBtn(skills.acrobatics, "Acrobatics")}
              <p>Appraise</p>
              {mapObjectToInputsWithAddBtn(skills.appraise, "Appraise")}
              <p>Bluff</p>
              {mapObjectToInputsWithAddBtn(skills.bluff, "Bluff")}
              <p>Climb</p>
              {mapObjectToInputsWithAddBtn(skills.climb, "Climb")}
            </form>
            <p>Craft</p>
            <form className="form-12-col">
              {mapArrayOfObjectsToInputsWithAddBtn(skills.craft, "Craft")}
            </form>
            <ModalButton
              modalBtnText="Add Craft"
              modalBody={<AddSkill array={skills.craft} />}
            />
            <form className="form-12-col">
              <p>Diplomacy</p>
              {mapObjectToInputsWithAddBtn(skills.diplomacy, "Diplomacy")}
              <p>Disable Device</p>
              {mapObjectToInputsWithAddBtn(
                skills.disableDevice,
                "Disable Device"
              )}
              <p>Disguise</p>
              {mapObjectToInputsWithAddBtn(skills.disguise, "Disguise")}
              <p>Escape Artist</p>
              {mapObjectToInputsWithAddBtn(
                skills.escapeArtist,
                "Escape Artist"
              )}
              <p>Fly</p>
              {mapObjectToInputsWithAddBtn(skills.fly, "Fly")}
              <p>Handle Animal</p>
              {mapObjectToInputsWithAddBtn(
                skills.handleAnimal,
                "Handle Animal"
              )}
              <p>Heal</p>
              {mapObjectToInputsWithAddBtn(skills.heal, "Heal")}
              <p>Intimidate</p>
              {mapObjectToInputsWithAddBtn(skills.intimidate, "Intimidate")}
            </form>
            <p>Knowledge</p>
            <form className="form-12-col">
              {mapArrayOfObjectsToInputsWithAddBtn(
                skills.knowledge,
                "Knowledge"
              )}
            </form>
            <ModalButton
              modalBtnText="Add Knowledge"
              modalBody={<AddSkill array={skills.knowledge} />}
            />
            <form className="form-12-col">
              <p>Linguistics</p>
              {mapObjectToInputsWithAddBtn(skills.linguistics, "Linguistics")}
              <p>Perception</p>
              {mapObjectToInputsWithAddBtn(skills.perception, "Perception")}
            </form>
            <p>Perform</p>
            <form className="form-12-col">
              {mapArrayOfObjectsToInputsWithAddBtn(skills.perform, "Perform")}
            </form>
            <ModalButton
              modalBtnText="Add Perform"
              modalBody={<AddSkill array={skills.perform} />}
            />
            <span className="spacer" />
            <p>Profession</p>
            <form className="form-12-col">
              {mapArrayOfObjectsToInputsWithAddBtn(
                skills.profession,
                "Profession"
              )}
            </form>
            <ModalButton
              modalBtnText="Add Profession"
              modalBody={<AddSkill array={skills.profession} />}
            />
            <form className="form-12-col">
              <p>Ride</p>
              {mapObjectToInputsWithAddBtn(skills.ride, "Ride")}
              <p>Sense Motive</p>
              {mapObjectToInputsWithAddBtn(skills.senseMotive, "Sense Motive")}
              <p>Sleight Of Hand</p>
              {mapObjectToInputsWithAddBtn(
                skills.sleightOfHand,
                "Sleight Of Hand"
              )}
              <p>Spellcraft</p>
              {mapObjectToInputsWithAddBtn(skills.spellcraft, "Spellcraft")}
              <p>Stealth</p>
              {mapObjectToInputsWithAddBtn(skills.stealth, "Stealth")}
              <p>Survival</p>
              {mapObjectToInputsWithAddBtn(skills.survival, "Survival")}
              <p>Swim</p>
              {mapObjectToInputsWithAddBtn(skills.swim, "Swim")}
              <p>Use Magic Device</p>
              {mapObjectToInputsWithAddBtn(
                skills.useMagicDevice,
                "Use Magic Device"
              )}
            </form>
            <form className="form-5-col">
              <div>
                <label htmlFor="conditionalModifiersAndOtherNotes">
                  Conditional Modifiers &amp; Other Notes
                </label>
                <div className="inline-input-button">
                  <input
                    id="conditionalModifiersAndOtherNotes"
                    value={skills.conditionalModifiersAndOtherNotes.value}
                    onChange={e =>
                      (skills.conditionalModifiersAndOtherNotes.value =
                        e.target.value)
                    }
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      skills.conditionalModifiersAndOtherNotes.isHidden = false;
                    }}
                    className=""
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="languages">Languages</label>
                <div className="inline-input-button">
                  <input
                    id="languages"
                    value={skills.languages.value}
                    onChange={e => (skills.languages.value = e.target.value)}
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      skills.languages.isHidden = false;
                    }}
                    className=""
                  >
                    +
                  </button>
                </div>
              </div>
            </form>
            <form className="form-5-col">
              <p>Experience Points</p>
              {mapObjectToInputsWithAddBtn(
                skills.experiencePoints,
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
