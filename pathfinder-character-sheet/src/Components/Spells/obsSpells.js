import { observable } from "mobx";

const obsSpells = observable({
  spellsKnown: {
    zeroth: { value: 0, isHidden: true },
    first: { value: 0, isHidden: true },
    second: { value: 0, isHidden: true },
    third: { value: 0, isHidden: true },
    forth: { value: 0, isHidden: true },
    fifth: { value: 0, isHidden: true },
    sixth: { value: 0, isHidden: true },
    seventh: { value: 0, isHidden: true },
    eighth: { value: 0, isHidden: true },
    ninth: { value: 0, isHidden: true }
  },
  spellDc: {
    zeroth: { value: 0, isHidden: true },
    first: { value: 0, isHidden: true },
    second: { value: 0, isHidden: true },
    third: { value: 0, isHidden: true },
    forth: { value: 0, isHidden: true },
    fifth: { value: 0, isHidden: true },
    sixth: { value: 0, isHidden: true },
    seventh: { value: 0, isHidden: true },
    eighth: { value: 0, isHidden: true },
    ninth: { value: 0, isHidden: true }
  },
  spellsPerDay: {
    zeroth: { value: 0, isHidden: true },
    first: { value: 0, isHidden: true },
    second: { value: 0, isHidden: true },
    third: { value: 0, isHidden: true },
    forth: { value: 0, isHidden: true },
    fifth: { value: 0, isHidden: true },
    sixth: { value: 0, isHidden: true },
    seventh: { value: 0, isHidden: true },
    eighth: { value: 0, isHidden: true },
    ninth: { value: 0, isHidden: true }
  },
  bonusSpells: {
    zeroth: { value: 0, isHidden: true },
    first: { value: 0, isHidden: true },
    second: { value: 0, isHidden: true },
    third: { value: 0, isHidden: true },
    forth: { value: 0, isHidden: true },
    fifth: { value: 0, isHidden: true },
    sixth: { value: 0, isHidden: true },
    seventh: { value: 0, isHidden: true },
    eighth: { value: 0, isHidden: true },
    ninth: { value: 0, isHidden: true }
  },
  conditionalModifiers: { value: 0, isHidden: true },
  speciality: { value: "", isHidden: true },
  spell: []
});

export default obsSpells;
