import { observable } from "mobx";

const obsDefence = observable({
  armourClass: {
    total: 0,
    touch: 0,
    otherModifiers: 0,
    flatFooted: 0,
    armourBonus: 0,
    shieldBonus: 0,
    dexModifier: 0,
    sizeModifier: 0,
    naturalArmor: 0,
    deflection: 0,
    miscModifier: 0
  },
  hp: {
    total: 0,
    wounds: 0,
    nonLethalDamage: 0
  },
  damageReduction: 0,
  spellResistance: 0,
  fortitude: {
    total: 0,
    baseSave: 0,
    abilityModifier: 0,
    magicModifier: 0,
    miscModifier: 0,
    tempModifier: 0,
    otherModifiers: 0
  },
  reflex: {
    total: 0,
    baseSave: 0,
    abilityModifier: 0,
    magicModifier: 0,
    miscModifier: 0,
    tempModifier: 0,
    otherModifiers: 0
  },
  will: {
    total: 0,
    baseSave: 0,
    abilityModifier: 0,
    magicModifier: 0,
    miscModifier: 0,
    tempModifier: 0,
    otherModifiers: 0
  },
  resist: {
    total: 0,
    baseSave: 0,
    abilityModifier: 0,
    magicModifier: 0,
    miscModifier: 0,
    tempModifier: 0,
    otherModifiers: 0
  },
  immune: 0,
  combatManoeuvreDefence: {
    total: 0,
    baseAttackBonus: 0,
    strModifier: 0,
    dexModifier: 0,
    sizeModifiers: 0,
    miscModifier: 0,
    tempModifier: 0
  }
});

export default obsDefence;
