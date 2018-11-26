import { observable } from "mobx";

const obsSummary = observable({
  hpTotalIsShown: true,
  armourClassTotalIsShown: true,
  strengthAbilityModifierIsShown: true,
  dexterityAbilityModifierIsShown: true,
  constitutionAbilityModifierIsShown: true,
  intelligenceAbilityModifierIsShown: true,
  wisdomAbilityModifierIsShown: true,
  charismaAbilityModifierIsShown: true,
  notesIsShown: true,
  initiativeTotalIsShown: true,
  meleeAttacksIsShown: true,
  spellIsShown: true,
  xIsShown: false
});

export default obsSummary;
