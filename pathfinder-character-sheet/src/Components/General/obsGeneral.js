import { observable } from "mobx";

const obsGeneral = observable({
  characterName: "",
  alignment: "",
  playerName: "",
  characterClassLevel: "",
  deity: "",
  homeland: "",
  race: "",
  size: "",
  gender: "",
  age: "",
  height: "",
  hair: "",
  eyes: ""
});

export default obsGeneral;
