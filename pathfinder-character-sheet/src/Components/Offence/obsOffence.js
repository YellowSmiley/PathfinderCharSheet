import { observable } from "mobx";

const obsOffence = observable({
  initiative: {
    total: 0,
    dexModifier: 0,
    miscModifier: 0
  },
  baseAttackBonus: 0,
  conditionalModifiers: 0,
  speedLand: {
    baseSpeed: 0,
    withArmour: 0,
    flyManoeuvrability: 0,
    burrow: 0,
    tempModifier: 0
  },
  combatManoeuvreBonus: {
    total: 0,
    baseAttackBonus: 0,
    strModifier: 0,
    sizeModifiers: 0,
    miscModifier: 0,
    tempModifier: 0
  },
  meleeAttacks: []
});

export default obsOffence;
