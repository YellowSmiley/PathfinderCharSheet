import React, { Component } from "react";
import { addObjToArray } from "../../utils";
import obsModal from "../Modal/obsModal";
import obsEquipment from "./obsEquipment";

class AddACItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      bonus: 0,
      type: "",
      checkPenalty: 0,
      spellFailure: 0,
      weight: 0,
      properties: "",
      isHidden: true
    };
  }

  onAddClick(e) {
    e.preventDefault();
    addObjToArray(this.state, obsEquipment.equipment.acItem);
    obsModal.show = !obsModal.show;
  }

  render() {
    return (
      <>
        <div className="panel-header">{obsModal.modalBtnText}</div>
        <div className="wrapper">
          <form className="form-6-col">
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="bonus">Bonus</label>
              <input
                id="bonus"
                value={this.state.bonus}
                onChange={e => this.setState({ bonus: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="type">Type</label>
              <input
                id="type"
                value={this.state.type}
                onChange={e => this.setState({ type: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="checkPenalty">Check Penalty</label>
              <input
                id="checkPenalty"
                value={this.state.checkPenalty}
                onChange={e => this.setState({ checkPenalty: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="spellFailure">Spell Failure</label>
              <input
                id="spellFailure"
                value={this.state.spellFailure}
                onChange={e => this.setState({ spellFailure: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="weight">Weight</label>
              <input
                id="weight"
                value={this.state.weight}
                onChange={e => this.setState({ weight: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="properties">Properties</label>
              <input
                id="properties"
                value={this.state.properties}
                onChange={e => this.setState({ properties: e.target.value })}
              />
            </div>
          </form>
        </div>
        <button
          type="submit"
          onClick={e => {
            this.onAddClick(e);
          }}
          className=""
        >
          {obsModal.modalBtnText}
        </button>
        <span className="spacer" />
      </>
    );
  }
}

export default AddACItem;
