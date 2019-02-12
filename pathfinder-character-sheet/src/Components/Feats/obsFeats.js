import { observable } from "mobx";

const obsFeats = observable({
  feats: { mastered: [], specialAbilities: [], traits: [] }
});

export default obsFeats;
