import { observable } from "mobx";

const obsDefence = observable({
  armourClass: {
    total: { value: 0, isHidden: true },
    touch: { value: 0, isHidden: true },
    otherModifiers: { value: 0, isHidden: true },
    flatFooted: { value: 0, isHidden: true },
    armourBonus: { value: 0, isHidden: true },
    shieldBonus: { value: 0, isHidden: true },
    dexModifier: { value: 0, isHidden: true },
    sizeModifier: { value: 0, isHidden: true },
    naturalArmor: { value: 0, isHidden: true },
    deflection: { value: 0, isHidden: true },
    miscModifier: { value: 0, isHidden: true }
  },
  hp: {
    total: { value: 0, isHidden: true },
    wounds: { value: 0, isHidden: true },
    nonLethalDamage: { value: 0, isHidden: true }
  },
  damageReduction: { value: 0, isHidden: true },
  spellResistance: { value: 0, isHidden: true },
  fortitude: {
    total: { value: 0, isHidden: true },
    baseSave: { value: 0, isHidden: true },
    abilityModifier: { value: 0, isHidden: true },
    magicModifier: { value: 0, isHidden: true },
    miscModifier: { value: 0, isHidden: true },
    tempModifier: { value: 0, isHidden: true },
    otherModifiers: { value: 0, isHidden: true }
  },
  reflex: {
    total: { value: 0, isHidden: true },
    baseSave: { value: 0, isHidden: true },
    abilityModifier: { value: 0, isHidden: true },
    magicModifier: { value: 0, isHidden: true },
    miscModifier: { value: 0, isHidden: true },
    tempModifier: { value: 0, isHidden: true },
    otherModifiers: { value: 0, isHidden: true }
  },
  will: {
    total: { value: 0, isHidden: true },
    baseSave: { value: 0, isHidden: true },
    abilityModifier: { value: 0, isHidden: true },
    magicModifier: { value: 0, isHidden: true },
    miscModifier: { value: 0, isHidden: true },
    tempModifier: { value: 0, isHidden: true },
    otherModifiers: { value: 0, isHidden: true }
  },
  resist: {
    total: { value: 0, isHidden: true },
    baseSave: { value: 0, isHidden: true },
    abilityModifier: { value: 0, isHidden: true },
    magicModifier: { value: 0, isHidden: true },
    miscModifier: { value: 0, isHidden: true },
    tempModifier: { value: 0, isHidden: true },
    otherModifiers: { value: 0, isHidden: true }
  },
  immune: { value: 0, isHidden: true },
  combatManoeuvreDefence: {
    total: { value: 0, isHidden: true },
    baseAttackBonus: { value: 0, isHidden: true },
    strModifier: { value: 0, isHidden: true },
    dexModifier: { value: 0, isHidden: true },
    sizeModifiers: { value: 0, isHidden: true },
    miscModifier: { value: 0, isHidden: true },
    tempModifier: { value: 0, isHidden: true }
  }
});

export default obsDefence;
