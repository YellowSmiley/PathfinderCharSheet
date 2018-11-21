import { observable } from "mobx";

const obsEquipment = observable({
  money: {
    copper: 0,
    silver: 0,
    gold: 0,
    platinum: 0
  },
  acItem: [
    {
      name: "",
      bonus: 0,
      type: "",
      checkPenalty: 0,
      spellFailure: 0,
      weight: 0,
      properties: ""
    }
  ],
  gear: [
    {
      name: "",
      type: "",
      location: "",
      quantity: 0,
      weight: 0,
      notes: ""
    }
  ]
});

export default obsEquipment;
