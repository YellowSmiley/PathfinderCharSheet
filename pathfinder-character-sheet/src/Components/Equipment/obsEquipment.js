import { observable } from "mobx";

const obsEquipment = observable({
  money: {
    copper: { value: 0, isHidden: true },
    silver: { value: 0, isHidden: true },
    gold: { value: 0, isHidden: true },
    platinum: { value: 0, isHidden: true }
  },
  acItem: [],
  gear: []
});

export default obsEquipment;
