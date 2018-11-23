import { observable } from "mobx";

const obsModal = observable({ show: false, body: null, modalBtnText: "" });

export default obsModal;
