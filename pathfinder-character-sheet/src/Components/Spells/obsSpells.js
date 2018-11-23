import { observable } from "mobx";

const obsSpells = observable({
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
  spell: []
});

export default obsSpells;
