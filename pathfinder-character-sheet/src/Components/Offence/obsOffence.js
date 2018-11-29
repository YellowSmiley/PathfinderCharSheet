import { observable } from "mobx";

const obsOffence = observable({
  initiative: {
    total: { value: 0, isHidden: false },
    dexModifier: { value: 0, isHidden: true },
    miscModifier: { value: 0, isHidden: true }
  },
  baseAttackBonus: { value: 0, isHidden: true },
  conditionalModifiers: { value: 0, isHidden: true },
  speedLand: {
    baseSpeed: { value: 0, isHidden: true },
    withArmour: { value: 0, isHidden: true },
    flyManoeuvrability: { value: 0, isHidden: true },
    burrow: { value: 0, isHidden: true },
    tempModifier: { value: 0, isHidden: true }
  },
  combatManoeuvreBonus: {
    total: { value: 0, isHidden: true },
    baseAttackBonus: { value: 0, isHidden: true },
    strModifier: { value: 0, isHidden: true },
    sizeModifiers: { value: 0, isHidden: true },
    miscModifier: { value: 0, isHidden: true },
    tempModifier: { value: 0, isHidden: true }
  },
  meleeAttacks: []
});

export default obsOffence;
