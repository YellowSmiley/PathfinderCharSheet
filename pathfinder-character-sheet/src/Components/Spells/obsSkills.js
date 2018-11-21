import { observable } from "mobx";

const obsSkills = observable({
  spells: {
    spellsKnown: {
      zeroth: 0,
      first: 0,
      second: 0,
      third: 0,
      forth: 0,
      fifth: 0,
      sixth: 0,
      seventh: 0,
      either: 0,
      ninth: 0
    },
    spellDc: {
      zeroth: 0,
      first: 0,
      second: 0,
      third: 0,
      forth: 0,
      fifth: 0,
      sixth: 0,
      seventh: 0,
      either: 0,
      ninth: 0
    },
    spellsPerDay: {
      zeroth: 0,
      first: 0,
      second: 0,
      third: 0,
      forth: 0,
      fifth: 0,
      sixth: 0,
      seventh: 0,
      either: 0,
      ninth: 0
    },
    bonusSpells: {
      zeroth: 0,
      first: 0,
      second: 0,
      third: 0,
      forth: 0,
      fifth: 0,
      sixth: 0,
      seventh: 0,
      either: 0,
      ninth: 0
    },
    conditionalModifiers: 0,
    speciality: "",
    spell: [
      {
        name: "",
        level: 0,
        school: "",
        subSchool: "",
        perDay: 0,
        used: 0,
        notes: "",
        description: ""
      }
    ]
  }
});

export default obsSkills;
