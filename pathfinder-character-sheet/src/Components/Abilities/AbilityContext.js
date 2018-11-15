import React from "react";

export let abilities = {
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
};

export const AbilityContext = React.createContext({
  abilities,
  changeAbility: (type, value) => {}
});
