import { observable } from "mobx";

const obsAbilities = observable({
  abilities: {
    strength: {
      abilityScore: { value: 0, isHidden: true },
      abilityModifier: { value: 0, isHidden: false },
      tempScore: { value: 0, isHidden: true },
      tempModifier: { value: 0, isHidden: true }
    },
    dexterity: {
      abilityScore: { value: 0, isHidden: true },
      abilityModifier: { value: 0, isHidden: false },
      tempScore: { value: 0, isHidden: true },
      tempModifier: { value: 0, isHidden: true }
    },
    constitution: {
      abilityScore: { value: 0, isHidden: true },
      abilityModifier: { value: 0, isHidden: false },
      tempScore: { value: 0, isHidden: true },
      tempModifier: { value: 0, isHidden: true }
    },
    intelligence: {
      abilityScore: { value: 0, isHidden: true },
      abilityModifier: { value: 0, isHidden: false },
      tempScore: { value: 0, isHidden: true },
      tempModifier: { value: 0, isHidden: true }
    },
    wisdom: {
      abilityScore: { value: 0, isHidden: true },
      abilityModifier: { value: 0, isHidden: false },
      tempScore: { value: 0, isHidden: true },
      tempModifier: { value: 0, isHidden: true }
    },
    charisma: {
      abilityScore: { value: 0, isHidden: true },
      abilityModifier: { value: 0, isHidden: false },
      tempScore: { value: 0, isHidden: true },
      tempModifier: { value: 0, isHidden: true }
    }
  }
});

export default obsAbilities;
