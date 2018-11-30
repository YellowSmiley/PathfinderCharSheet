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
      return (
        <div className="panel">
          <div className="panel-header">Summary</div>
          <div className="wrapper">
            <p>Use the - buttons to remove the values to your Summary page!</p>
            <form
              className={
                ifAnyObjNotHidden(obsAbilities) ? "form-6-col" : "hidden"
              }
            >
              {mapObjectsToInputsWithRemoveBtn(
                obsAbilities.strength,
                "Strength"
              )}
              {mapObjectsToInputsWithRemoveBtn(
                obsAbilities.dexterity,
                "Dexterity"
              )}
              {mapObjectsToInputsWithRemoveBtn(
                obsAbilities.constitution,
                "Constitution"
              )}
              {mapObjectsToInputsWithRemoveBtn(
                obsAbilities.intelligence,
                "Intelligence"
              )}
              {mapObjectsToInputsWithRemoveBtn(obsAbilities.wisdom, "Wisdom")}
              {mapObjectsToInputsWithRemoveBtn(
                obsAbilities.charisma,
                "Charisma"
              )}
            </form>
            <p>Defence</p>
            <form
              className={
                ifAnyObjNotHidden(obsDefence) ? "form-6-col" : "hidden"
              }
            >
              {mapObjectsToInputsWithRemoveBtn(
                obsDefence.armourClass,
                "Armour Class"
              )}
              {mapObjectsToInputsWithRemoveBtn(obsDefence.hp, "HP")}
              {obsDefence.damageReduction.isHidden === false ? (
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
                      obsDefence.damageReduction.isHidden = true;
                    }}
                    className=""
                  >
                    -
                  </button>
                </div>
              ) : null}
              {obsDefence.spellResistance.isHidden === false ? (
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
                      obsDefence.spellResistance.isHidden = true;
                    }}
                    className=""
                  >
                    -
                  </button>
                </div>
              ) : null}
              {mapObjectsToInputsWithRemoveBtn(
                obsDefence.fortitude,
                "Fortitude"
              )}
              {mapObjectsToInputsWithRemoveBtn(obsDefence.reflex, "Reflex")}
              {mapObjectsToInputsWithRemoveBtn(obsDefence.will, "Will")}
              {mapObjectsToInputsWithRemoveBtn(obsDefence.resist, "Resist")}
              {obsDefence.immune.isHidden === false ? (
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
                      obsDefence.immune.isHidden = true;
                    }}
                    className=""
                  >
                    -
                  </button>
                </div>
              ) : null}
              {mapObjectsToInputsWithRemoveBtn(
                obsDefence.combatManoeuvreDefence,
                "Combat Manoeuvre Defence"
              )}
            </form>
            <form
              className={
                ifAnyObjNotHidden(obsEquipment) ? "form-6-col" : "hidden"
              }
            >
              {mapObjectsToInputsWithRemoveBtn(
                obsEquipment.money,
                "Armour Class"
              )}
              {mapArrayOfObjectsToInputsWithRemoveBtn(
                obsEquipment.acItem,
                "AC Items"
              )}
              {mapArrayOfObjectsToInputsWithRemoveBtn(
                obsEquipment.gear,
                "Gear"
              )}
            </form>
            <form
              className={ifAnyObjNotHidden(obsFeats) ? "form-6-col" : "hidden"}
            >
              {mapArrayOfObjectsToInputsWithRemoveBtn(
                obsFeats.mastered,
                "Mastered"
              )}
              {mapArrayOfObjectsToInputsWithRemoveBtn(
                obsFeats.specialAbilities,
                "Special Abilities"
              )}
              {mapArrayOfObjectsToInputsWithRemoveBtn(
                obsFeats.traits,
                "Traits"
              )}
            </form>
            <form
              className={
                ifAnyObjNotHidden(obsGeneral) ? "form-6-col" : "hidden"
              }
            >
              {mapObjectsToInputsWithRemoveBtn(obsGeneral, "General")}
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
              className={
                ifAnyObjNotHidden(obsOffence) ? "form-6-col" : "hidden"
              }
            >
              {mapObjectsToInputsWithRemoveBtn(
                obsOffence.initiative,
                "Initiative"
              )}
              {obsOffence.baseAttackBonus.isHidden === false ? (
                <div>
                  <label htmlFor="baseAttackBonus">Base Attack Bonus</label>
                  <input
                    id="baseAttackBonus"
                    value={obsOffence.baseAttackBonus.value}
                    onChange={e =>
                      (obsOffence.baseAttackBonus.value = e.target.value)
                    }
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      obsOffence.baseAttackBonus.isHidden = true;
                    }}
                    className=""
                  >
                    -
                  </button>
                </div>
              ) : null}
              {obsOffence.conditionalModifiers.isHidden === false ? (
                <div>
                  <label htmlFor="conditionalModifiers">
                    Conditional Modifiers
                  </label>
                  <input
                    id="conditionalModifiers"
                    value={obsOffence.conditionalModifiers.value}
                    onChange={e =>
                      (obsOffence.conditionalModifiers.value = e.target.value)
                    }
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      obsOffence.conditionalModifiers.isHidden = true;
                    }}
                    className=""
                  >
                    -
                  </button>
                </div>
              ) : null}
              {mapObjectsToInputsWithRemoveBtn(
                obsOffence.speedLand,
                "Speed Land"
              )}
              {mapObjectsToInputsWithRemoveBtn(
                obsOffence.combatManoeuvreBonus,
                "Combat Manoeuvre Bonus"
              )}
              {mapArrayOfObjectsToInputsWithRemoveBtn(
                obsOffence.meleeAttacks,
                "Melee Attacks"
              )}
            </form>
            <form
              className={ifAnyObjNotHidden(obsSkills) ? "form-6-col" : "hidden"}
            >
              {mapObjectsToInputsWithRemoveBtn(
                obsSkills.acrobatics,
                "Acrobatics"
              )}
              {mapObjectsToInputsWithRemoveBtn(obsSkills.appraise, "Appraise")}
              {mapObjectsToInputsWithRemoveBtn(obsSkills.bluff, "Bluff")}
              {mapObjectsToInputsWithRemoveBtn(obsSkills.climb, "Climb")}
              {mapArrayOfObjectsToInputsWithRemoveBtn(obsSkills.craft, "Craft")}
              {mapObjectsToInputsWithRemoveBtn(
                obsSkills.diplomacy,
                "Diplomacy"
              )}
              {mapObjectsToInputsWithRemoveBtn(
                obsSkills.disableDevice,
                "Disable Device"
              )}
              {mapObjectsToInputsWithRemoveBtn(obsSkills.disguise, "Disguise")}
              {mapObjectsToInputsWithRemoveBtn(
                obsSkills.escapeArtist,
                "Escape Artist"
              )}
              {mapObjectsToInputsWithRemoveBtn(obsSkills.fly, "Fly")}
              {mapObjectsToInputsWithRemoveBtn(
                obsSkills.handleAnimal,
                "Handle Animal"
              )}
              {mapObjectsToInputsWithRemoveBtn(obsSkills.heal, "Heal")}
              {mapObjectsToInputsWithRemoveBtn(
                obsSkills.intimidate,
                "Intimidate"
              )}
              {mapArrayOfObjectsToInputsWithRemoveBtn(
                obsSkills.knowledge,
                "Knowledge"
              )}
              {mapObjectsToInputsWithRemoveBtn(
                obsSkills.linguistics,
                "Linguistics"
              )}
              {mapObjectsToInputsWithRemoveBtn(
                obsSkills.perception,
                "Perception"
              )}
              {mapArrayOfObjectsToInputsWithRemoveBtn(
                obsSkills.perform,
                "Perform"
              )}
              {mapArrayOfObjectsToInputsWithRemoveBtn(
                obsSkills.profession,
                "Profession"
              )}
              {mapObjectsToInputsWithRemoveBtn(obsSkills.ride, "Ride")}
              {mapObjectsToInputsWithRemoveBtn(
                obsSkills.senseMotive,
                "Sense Motive"
              )}
              {mapObjectsToInputsWithRemoveBtn(
                obsSkills.sleightOfHand,
                "Sleight Of Hand"
              )}
              {mapObjectsToInputsWithRemoveBtn(
                obsSkills.spellcraft,
                "Spellcraft"
              )}
              {mapObjectsToInputsWithRemoveBtn(obsSkills.stealth, "Stealth")}
              {mapObjectsToInputsWithRemoveBtn(obsSkills.survival, "Survival")}
              {mapObjectsToInputsWithRemoveBtn(obsSkills.swim, "Swim")}
              {mapObjectsToInputsWithRemoveBtn(
                obsSkills.useMagicDevice,
                "Use Magic Device"
              )}
              {obsSkills.conditionalModifiersAndOtherNotes.isHidden ===
              false ? (
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
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      obsSkills.conditionalModifiersAndOtherNotes.isHidden = true;
                    }}
                    className=""
                  >
                    -
                  </button>
                </div>
              ) : null}
              {obsSkills.languages.isHidden === false ? (
                <div>
                  <label htmlFor="languages">Languages</label>
                  <input
                    id="languages"
                    value={obsSkills.languages.value}
                    onChange={e => (obsSkills.languages.value = e.target.value)}
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      obsSkills.languages.isHidden = true;
                    }}
                    className=""
                  >
                    -
                  </button>
                </div>
              ) : null}
              {mapObjectsToInputsWithRemoveBtn(
                obsSkills.experiencePoints,
                "Experience Points"
              )}
            </form>
            <form
              className={ifAnyObjNotHidden(obsSpells) ? "form-6-col" : "hidden"}
            >
              {mapObjectsToInputsWithRemoveBtn(
                obsSpells.spellsKnown,
                "Spells Known"
              )}
              {mapObjectsToInputsWithRemoveBtn(obsSpells.spellDc, "Spell DC")}
              {mapObjectsToInputsWithRemoveBtn(
                obsSpells.spellsPerDay,
                "Spells Per Day"
              )}
              {mapObjectsToInputsWithRemoveBtn(
                obsSpells.bonusSpells,
                "Bonus Spells"
              )}
              {obsSpells.conditionalModifiers.isHidden === false ? (
                <div>
                  <label htmlFor="conditionalModifiers">
                    Conditional Modifiers
                  </label>
                  <input
                    id="conditionalModifiers"
                    value={obsSpells.conditionalModifiers.value}
                    onChange={e =>
                      (obsSpells.conditionalModifiers.value = e.target.value)
                    }
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      obsSpells.conditionalModifiers.isHidden = true;
                    }}
                    className=""
                  >
                    -
                  </button>
                </div>
              ) : null}
              {obsSpells.speciality.isHidden === false ? (
                <div>
                  <label htmlFor="speciality">Speciality</label>
                  <input
                    id="speciality"
                    value={obsSpells.speciality.value}
                    onChange={e =>
                      (obsSpells.speciality.value = e.target.value)
                    }
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      obsSpells.speciality.isHidden = true;
                    }}
                    className=""
                  >
                    -
                  </button>
                </div>
              ) : null}
              {mapArrayOfObjectsToInputsWithRemoveBtn(obsSpells.spell, "Spell")}
            </form>
          </div>
        </div>
      );
    }
  }
);

export default Summary;
