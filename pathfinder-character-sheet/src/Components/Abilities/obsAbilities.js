import { observable } from "mobx";

const obsAbilities = observable({
  abilities: {
    strength: {
      abilityScore: 0,
      abilityModifier: 0,
      tempScore: 0,
      tempModifier: 0
    },
    dexterity: {
      abilityScore: 0,
      abilityModifier: 0,
      tempScore: 0,
      tempModifier: 0
    },
    constitution: {
      abilityScore: 0,
      abilityModifier: 0,
      tempScore: 0,
      tempModifier: 0
    },
    intelligence: {
      abilityScore: 0,
      abilityModifier: 0,
      tempScore: 0,
      tempModifier: 0
    },
    wisdom: {
      abilityScore: 0,
      abilityModifier: 0,
      tempScore: 0,
      tempModifier: 0
    },
    charisma: {
      abilityScore: 0,
      abilityModifier: 0,
      tempScore: 0,
      tempModifier: 0
    }
  },

  getAbilityValueOnType(type) {
    switch (type) {
      case "strength":
        return this.abilities.strength;
      case "dexterity":
        return this.abilities.dexterity;
      case "constitution":
        return this.abilities.constitution;
      case "intelligence":
        return this.abilities.intelligence;
      case "wisdom":
        return this.abilities.wisdom;
      case "charisma":
        return this.abilities.charisma;
      default:
        return false;
    }
  },

  handleAbilitiesChange(type, abilityValue, value) {
    let newAbilities = this.abilities;
    switch (type) {
      case "strength":
        switch (abilityValue) {
          case "abilityScore":
            newAbilities.strength.abilityScore = value;
            break;
          case "abilityModifier":
            newAbilities.strength.abilityModifier = value;
            break;
          case "tempScore":
            newAbilities.strength.tempScore = value;
            break;
          case "tempModifier":
            newAbilities.strength.tempModifier = value;
            break;
          default:
            return false;
        }
        break;
      case "dexterity":
        switch (abilityValue) {
          case "abilityScore":
            newAbilities.dexterity.abilityScore = value;
            break;
          case "abilityModifier":
            newAbilities.dexterity.abilityModifier = value;
            break;
          case "tempScore":
            newAbilities.dexterity.tempScore = value;
            break;
          case "tempModifier":
            newAbilities.dexterity.tempModifier = value;
            break;
          default:
            return false;
        }
        break;
      case "constitution":
        switch (abilityValue) {
          case "abilityScore":
            newAbilities.constitution.abilityScore = value;
            break;
          case "abilityModifier":
            newAbilities.constitution.abilityModifier = value;
            break;
          case "tempScore":
            newAbilities.constitution.tempScore = value;
            break;
          case "tempModifier":
            newAbilities.constitution.tempModifier = value;
            break;
          default:
            return false;
        }
        break;
      case "intelligence":
        switch (abilityValue) {
          case "abilityScore":
            newAbilities.intelligence.abilityScore = value;
            break;
          case "abilityModifier":
            newAbilities.intelligence.abilityModifier = value;
            break;
          case "tempScore":
            newAbilities.intelligence.tempScore = value;
            break;
          case "tempModifier":
            newAbilities.intelligence.tempModifier = value;
            break;
          default:
            return false;
        }
        break;
      case "wisdom":
        switch (abilityValue) {
          case "abilityScore":
            newAbilities.wisdom.abilityScore = value;
            break;
          case "abilityModifier":
            newAbilities.wisdom.abilityModifier = value;
            break;
          case "tempScore":
            newAbilities.wisdom.tempScore = value;
            break;
          case "tempModifier":
            newAbilities.wisdom.tempModifier = value;
            break;
          default:
            return false;
        }
        break;
      case "charisma":
        switch (abilityValue) {
          case "abilityScore":
            newAbilities.charisma.abilityScore = value;
            break;
          case "abilityModifier":
            newAbilities.charisma.abilityModifier = value;
            break;
          case "tempScore":
            newAbilities.charisma.tempScore = value;
            break;
          case "tempModifier":
            newAbilities.charisma.tempModifier = value;
            break;
          default:
            return false;
        }
        break;
      default:
        return false;
    }
    this.abilities = newAbilities;
  }
});

export default obsAbilities;
