import React, { Component } from "react";
import { observer } from "mobx-react";
import obsAbilities from "./Abilities/obsAbilities";
import obsDefence from "./Defence/obsDefence";
import obsOffence from "./Offence/obsOffence";
import obsEquipment from "./Equipment/obsEquipment";
import obsFeats from "./Feats/obsFeats";
import obsGeneral from "./General/obsGeneral";
import obsNotes from "./Notes/obsNotes";
import obsSkills from "./Skills/obsSkills";
import obsSpells from "./Spells/obsSpells";
import {
  mapObjectsToInputsWithRemoveBtn,
  mapArrayOfObjectsToInputsWithRemoveBtn,
  ifAnyObjNotHidden
} from "../utils";

const Summary = observer(
  class Summary extends Component {
    render() {
      /* TODO: Add, you need to add items to summary, text when no items are shown and hide "use the..." text */
      /* TODO: Create Panel component and remove panel code from all components */
      /* TODO: Entitle forms by obs */

      const abilities = obsAbilities.abilities;
      const defence = obsDefence.defence;
      const equipment = obsEquipment.equipment;
      const feats = obsFeats.feats;
      const general = obsGeneral.general;
      const offence = obsOffence.offence;
      const skills = obsSkills.skills;
      const spells = obsSpells.spells;
      return (
        <div className="panel">
          <div className="panel-header">Summary</div>
          <div className="wrapper">
            <p>Use the - buttons to remove the values to your Summary page!</p>
            <form
              className={ifAnyObjNotHidden(abilities) ? "form-6-col" : "hidden"}
            >
              {mapObjectsToInputsWithRemoveBtn(abilities.strength, "Strength")}
              {mapObjectsToInputsWithRemoveBtn(
                abilities.dexterity,
                "Dexterity"
              )}
              {mapObjectsToInputsWithRemoveBtn(
                abilities.constitution,
                "Constitution"
              )}
              {mapObjectsToInputsWithRemoveBtn(
                abilities.intelligence,
                "Intelligence"
              )}
              {mapObjectsToInputsWithRemoveBtn(abilities.wisdom, "Wisdom")}
              {mapObjectsToInputsWithRemoveBtn(abilities.charisma, "Charisma")}
            </form>
            <p>Defence</p>
            <form
              className={ifAnyObjNotHidden(defence) ? "form-6-col" : "hidden"}
            >
              {mapObjectsToInputsWithRemoveBtn(
                defence.armourClass,
                "Armour Class"
              )}
              {mapObjectsToInputsWithRemoveBtn(defence.hp, "HP")}
              {defence.damageReduction.isHidden === false ? (
                <div>
                  <label htmlFor="damageReduction">Damage Reduction</label>
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
                      defence.damageReduction.isHidden = true;
                    }}
                    className=""
                  >
                    -
                  </button>
                </div>
              ) : null}
              {defence.spellResistance.isHidden === false ? (
                <div>
                  <label htmlFor="spellResistance">Spell Resistance</label>
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
                      defence.spellResistance.isHidden = true;
                    }}
                    className=""
                  >
                    -
                  </button>
                </div>
              ) : null}
              {mapObjectsToInputsWithRemoveBtn(defence.fortitude, "Fortitude")}
              {mapObjectsToInputsWithRemoveBtn(defence.reflex, "Reflex")}
              {mapObjectsToInputsWithRemoveBtn(defence.will, "Will")}
              {mapObjectsToInputsWithRemoveBtn(defence.resist, "Resist")}
              {defence.immune.isHidden === false ? (
                <div>
                  <label htmlFor="immune">Immune</label>
                  <input
                    id="immune"
                    value={defence.immune.value}
                    onChange={e => (defence.immune.value = e.target.value)}
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      defence.immune.isHidden = true;
                    }}
                    className=""
                  >
                    -
                  </button>
                </div>
              ) : null}
              {mapObjectsToInputsWithRemoveBtn(
                defence.combatManoeuvreDefence,
                "Combat Manoeuvre Defence"
              )}
            </form>
            <form
              className={ifAnyObjNotHidden(equipment) ? "form-6-col" : "hidden"}
            >
              {mapObjectsToInputsWithRemoveBtn(equipment.money, "Armour Class")}
            </form>
            <form
              className={
                ifAnyObjNotHidden(equipment.acItem) ? "form-8-col" : "hidden"
              }
            >
              {mapArrayOfObjectsToInputsWithRemoveBtn(
                equipment.acItem,
                "AC Items"
              )}
            </form>
            <form
              className={
                ifAnyObjNotHidden(equipment.gear) ? "form-7-col" : "hidden"
              }
            >
              {mapArrayOfObjectsToInputsWithRemoveBtn(equipment.gear, "Gear")}
            </form>
            <form
              className={ifAnyObjNotHidden(feats) ? "form-4-col" : "hidden"}
            >
              {mapArrayOfObjectsToInputsWithRemoveBtn(
                feats.mastered,
                "Mastered"
              )}
              {mapArrayOfObjectsToInputsWithRemoveBtn(
                feats.specialAbilities,
                "Special Abilities"
              )}
              {mapArrayOfObjectsToInputsWithRemoveBtn(feats.traits, "Traits")}
            </form>
            <form
              className={ifAnyObjNotHidden(general) ? "form-6-col" : "hidden"}
            >
              {mapObjectsToInputsWithRemoveBtn(general, "General")}
              {obsNotes.notes.isHidden === false ? (
                <div>
                  <label htmlFor="notes">Notes</label>
                  <textarea
                    id="notes"
                    rows="4"
                    value={obsNotes.notes.value}
                    onChange={e => (obsNotes.notes.value = e.target.value)}
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      obsNotes.notes.isHidden = true;
                    }}
                    className=""
                  >
                    -
                  </button>
                </div>
              ) : null}
            </form>
            <form
              className={ifAnyObjNotHidden(offence) ? "form-6-col" : "hidden"}
            >
              {mapObjectsToInputsWithRemoveBtn(
                offence.initiative,
                "Initiative"
              )}
              {offence.baseAttackBonus.isHidden === false ? (
                <div>
                  <label htmlFor="baseAttackBonus">Base Attack Bonus</label>
                  <input
                    id="baseAttackBonus"
                    value={offence.baseAttackBonus.value}
                    onChange={e =>
                      (offence.baseAttackBonus.value = e.target.value)
                    }
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      offence.baseAttackBonus.isHidden = true;
                    }}
                    className=""
                  >
                    -
                  </button>
                </div>
              ) : null}
              {offence.conditionalModifiers.isHidden === false ? (
                <div>
                  <label htmlFor="conditionalModifiers">
                    Conditional Modifiers
                  </label>
                  <input
                    id="conditionalModifiers"
                    value={offence.conditionalModifiers.value}
                    onChange={e =>
                      (offence.conditionalModifiers.value = e.target.value)
                    }
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      offence.conditionalModifiers.isHidden = true;
                    }}
                    className=""
                  >
                    -
                  </button>
                </div>
              ) : null}
              {mapObjectsToInputsWithRemoveBtn(offence.speedLand, "Speed Land")}
              {mapObjectsToInputsWithRemoveBtn(
                offence.combatManoeuvreBonus,
                "Combat Manoeuvre Bonus"
              )}
            </form>
            <form
              className={ifAnyObjNotHidden(offence) ? "form-7-col" : "hidden"}
            >
              {mapArrayOfObjectsToInputsWithRemoveBtn(
                offence.meleeAttacks,
                "Melee Attacks"
              )}
            </form>
            <form
              className={ifAnyObjNotHidden(skills) ? "form-6-col" : "hidden"}
            >
              {mapObjectsToInputsWithRemoveBtn(skills.acrobatics, "Acrobatics")}
              {mapObjectsToInputsWithRemoveBtn(skills.appraise, "Appraise")}
              {mapObjectsToInputsWithRemoveBtn(skills.bluff, "Bluff")}
              {mapObjectsToInputsWithRemoveBtn(skills.climb, "Climb")}
            </form>
            <form
              className={ifAnyObjNotHidden(offence) ? "form-12-col" : "hidden"}
            >
              {mapArrayOfObjectsToInputsWithRemoveBtn(skills.craft, "Craft")}
            </form>
            <form
              className={ifAnyObjNotHidden(offence) ? "form-6-col" : "hidden"}
            >
              {mapObjectsToInputsWithRemoveBtn(skills.diplomacy, "Diplomacy")}
              {mapObjectsToInputsWithRemoveBtn(
                skills.disableDevice,
                "Disable Device"
              )}
              {mapObjectsToInputsWithRemoveBtn(skills.disguise, "Disguise")}
              {mapObjectsToInputsWithRemoveBtn(
                skills.escapeArtist,
                "Escape Artist"
              )}
              {mapObjectsToInputsWithRemoveBtn(skills.fly, "Fly")}
              {mapObjectsToInputsWithRemoveBtn(
                skills.handleAnimal,
                "Handle Animal"
              )}
              {mapObjectsToInputsWithRemoveBtn(skills.heal, "Heal")}
              {mapObjectsToInputsWithRemoveBtn(skills.intimidate, "Intimidate")}
            </form>
            <form
              className={ifAnyObjNotHidden(offence) ? "form-12-col" : "hidden"}
            >
              {mapArrayOfObjectsToInputsWithRemoveBtn(
                skills.knowledge,
                "Knowledge"
              )}
            </form>
            <form
              className={ifAnyObjNotHidden(offence) ? "form-6-col" : "hidden"}
            >
              {mapObjectsToInputsWithRemoveBtn(
                skills.linguistics,
                "Linguistics"
              )}
              {mapObjectsToInputsWithRemoveBtn(skills.perception, "Perception")}
            </form>
            <form
              className={ifAnyObjNotHidden(offence) ? "form-12-col" : "hidden"}
            >
              {mapArrayOfObjectsToInputsWithRemoveBtn(
                skills.perform,
                "Perform"
              )}
              {mapArrayOfObjectsToInputsWithRemoveBtn(
                skills.profession,
                "Profession"
              )}
            </form>
            <form
              className={ifAnyObjNotHidden(offence) ? "form-12-col" : "hidden"}
            >
              {mapObjectsToInputsWithRemoveBtn(skills.ride, "Ride")}
              {mapObjectsToInputsWithRemoveBtn(
                skills.senseMotive,
                "Sense Motive"
              )}
              {mapObjectsToInputsWithRemoveBtn(
                skills.sleightOfHand,
                "Sleight Of Hand"
              )}
              {mapObjectsToInputsWithRemoveBtn(skills.spellcraft, "Spellcraft")}
              {mapObjectsToInputsWithRemoveBtn(skills.stealth, "Stealth")}
              {mapObjectsToInputsWithRemoveBtn(skills.survival, "Survival")}
              {mapObjectsToInputsWithRemoveBtn(skills.swim, "Swim")}
              {mapObjectsToInputsWithRemoveBtn(
                skills.useMagicDevice,
                "Use Magic Device"
              )}
              {skills.conditionalModifiersAndOtherNotes.isHidden === false ? (
                <div>
                  <label htmlFor="conditionalModifiersAndOtherNotes">
                    Conditional Modifiers &amp; Other Notes
                  </label>
                  <input
                    id="conditionalModifiersAndOtherNotes"
                    value={skills.conditionalModifiersAndOtherNotes.value}
                    onChange={e =>
                      (skills.conditionalModifiersAndOtherNotes =
                        e.target.value)
                    }
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      skills.conditionalModifiersAndOtherNotes.isHidden = true;
                    }}
                    className=""
                  >
                    -
                  </button>
                </div>
              ) : null}
              {skills.languages.isHidden === false ? (
                <div>
                  <label htmlFor="languages">Languages</label>
                  <input
                    id="languages"
                    value={skills.languages.value}
                    onChange={e => (skills.languages.value = e.target.value)}
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      skills.languages.isHidden = true;
                    }}
                    className=""
                  >
                    -
                  </button>
                </div>
              ) : null}
              {mapObjectsToInputsWithRemoveBtn(
                skills.experiencePoints,
                "Experience Points"
              )}
            </form>
            <form
              className={ifAnyObjNotHidden(spells) ? "form-6-col" : "hidden"}
            >
              {mapObjectsToInputsWithRemoveBtn(
                spells.spellsKnown,
                "Spells Known"
              )}
              {mapObjectsToInputsWithRemoveBtn(spells.spellDc, "Spell DC")}
              {mapObjectsToInputsWithRemoveBtn(
                spells.spellsPerDay,
                "Spells Per Day"
              )}
              {mapObjectsToInputsWithRemoveBtn(
                spells.bonusSpells,
                "Bonus Spells"
              )}
              {spells.conditionalModifiers.isHidden === false ? (
                <div>
                  <label htmlFor="conditionalModifiers">
                    Conditional Modifiers
                  </label>
                  <input
                    id="conditionalModifiers"
                    value={spells.conditionalModifiers.value}
                    onChange={e =>
                      (spells.conditionalModifiers.value = e.target.value)
                    }
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      spells.conditionalModifiers.isHidden = true;
                    }}
                    className=""
                  >
                    -
                  </button>
                </div>
              ) : null}
              {spells.speciality.isHidden === false ? (
                <div>
                  <label htmlFor="speciality">Speciality</label>
                  <input
                    id="speciality"
                    value={spells.speciality.value}
                    onChange={e => (spells.speciality.value = e.target.value)}
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      spells.speciality.isHidden = true;
                    }}
                    className=""
                  >
                    -
                  </button>
                </div>
              ) : null}
            </form>
            <form
              className={
                ifAnyObjNotHidden(spells.spell) ? "form-9-col" : "hidden"
              }
            >
              {mapArrayOfObjectsToInputsWithRemoveBtn(spells.spell, "Spell")}
            </form>
          </div>
        </div>
      );
    }
  }
);

export default Summary;
