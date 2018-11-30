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
      return (
        <div className="panel">
          <div className="panel-header">Skills</div>
          <div className="wrapper">
            <p>Use the + buttons to add the values to your Summary page!</p>
            <form className="form-12-col">
              <p>Acrobatics</p>
              {mapObjectToInputsWithAddBtn(obsSkills.acrobatics, "Acrobatics")}
              <p>Appraise</p>
              {mapObjectToInputsWithAddBtn(obsSkills.appraise, "Appraise")}
              <p>Bluff</p>
              {mapObjectToInputsWithAddBtn(obsSkills.bluff, "Bluff")}
              <p>Climb</p>
              {mapObjectToInputsWithAddBtn(obsSkills.climb, "Climb")}
            </form>
            <p>Craft</p>
            <form className="form-12-col">
              {mapArrayOfObjectsToInputsWithAddBtn(obsSkills.craft, "Craft")}
            </form>
            <ModalButton
              modalBtnText="Add Craft"
              modalBody={<AddSkill array={obsSkills.craft} />}
            />
            <form className="form-12-col">
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
            </form>
            <p>Knowledge</p>
            <form className="form-12-col">
              {mapArrayOfObjectsToInputsWithAddBtn(
                obsSkills.knowledge,
                "Knowledge"
              )}
            </form>
            <ModalButton
              modalBtnText="Add Knowledge"
              modalBody={<AddSkill array={obsSkills.knowledge} />}
            />
            <form className="form-12-col">
              <p>Linguistics</p>
              {mapObjectToInputsWithAddBtn(
                obsSkills.linguistics,
                "Linguistics"
              )}
              <p>Perception</p>
              {mapObjectToInputsWithAddBtn(obsSkills.perception, "Perception")}
            </form>
            <p>Perform</p>
            <form className="form-12-col">
              {mapArrayOfObjectsToInputsWithAddBtn(
                obsSkills.perform,
                "Perform"
              )}
            </form>
            <ModalButton
              modalBtnText="Add Perform"
              modalBody={<AddSkill array={obsSkills.perform} />}
            />
            <span className="spacer" />
            <p>Profession</p>
            <form className="form-12-col">
              {mapArrayOfObjectsToInputsWithAddBtn(
                obsSkills.profession,
                "Profession"
              )}
            </form>
            <ModalButton
              modalBtnText="Add Profession"
              modalBody={<AddSkill array={obsSkills.profession} />}
            />
            <form className="form-12-col">
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
            </form>
            <form className="form-5-col">
              <div>
                <label htmlFor="conditionalModifiersAndOtherNotes">
                  Conditional Modifiers &amp; Other Notes
                </label>
                <div className="inline-input-button">
                  <input
                    id="conditionalModifiersAndOtherNotes"
                    value={obsSkills.conditionalModifiersAndOtherNotes.value}
                    onChange={e =>
                      (obsSkills.conditionalModifiersAndOtherNotes.value =
                        e.target.value)
                    }
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      obsSkills.conditionalModifiersAndOtherNotes.isHidden = false;
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
                    value={obsSkills.languages.value}
                    onChange={e => (obsSkills.languages.value = e.target.value)}
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      obsSkills.languages.isHidden = false;
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
