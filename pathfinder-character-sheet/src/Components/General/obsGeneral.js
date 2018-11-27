import { observable } from "mobx";

const obsGeneral = observable({
  characterName: { value: "", isHidden: true },
  alignment: { value: "", isHidden: true },
  playerName: { value: "", isHidden: true },
  characterClassLevel: { value: "", isHidden: true },
  deity: { value: "", isHidden: true },
  homeland: { value: "", isHidden: true },
  race: { value: "", isHidden: true },
  size: { value: "", isHidden: true },
  gender: { value: "", isHidden: true },
  age: { value: "", isHidden: true },
  height: { value: "", isHidden: true },
  hair: { value: "", isHidden: true },
  eyes: { value: "", isHidden: true }
});

export default obsGeneral;
