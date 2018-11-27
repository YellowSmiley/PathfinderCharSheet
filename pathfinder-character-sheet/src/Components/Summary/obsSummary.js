import { observable } from "mobx";

const obsSummary = observable({
  hpTotalIsHidden: false,
  armourClassTotalIsHidden: false,
  strengthAbilityModifierIsHidden: false,
  dexterityAbilityModifierIsHidden: false,
  constitutionAbilityModifierIsHidden: false,
  intelligenceAbilityModifierIsHidden: false,
  wisdomAbilityModifierIsHidden: false,
  charismaAbilityModifierIsHidden: false,
  notesIsHidden: false,
  initiativeTotalIsHidden: false,
  meleeAttacksIsHidden: false,
  spellIsHidden: false,
  xIsHidden: true
});

export default obsSummary;
