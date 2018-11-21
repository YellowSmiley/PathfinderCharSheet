import { observable } from "mobx";

const obsFeats = observable({
  feats: {
    mastered: [
      {
        name: "",
        type: "",
        notes: ""
      }
    ],
    specialAbilities: [
      {
        name: "",
        type: "",
        notes: ""
      }
    ],
    traits: [
      {
        name: "",
        type: "",
        notes: ""
      }
    ]
  }
});

export default obsFeats;
