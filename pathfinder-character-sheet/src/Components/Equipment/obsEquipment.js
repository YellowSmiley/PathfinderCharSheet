import { observable } from "mobx";

const obsEquipment = observable({
  money: {
    copper: 0,
    silver: 0,
    gold: 0,
    platinum: 0
  },
  acItem: [],
  gear: []
});

export default obsEquipment;
