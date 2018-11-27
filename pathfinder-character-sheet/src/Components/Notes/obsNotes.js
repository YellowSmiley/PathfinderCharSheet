import { observable } from "mobx";

const obsNotes = observable({
  notes: { value: "", isHidden: true }
});

export default obsNotes;
