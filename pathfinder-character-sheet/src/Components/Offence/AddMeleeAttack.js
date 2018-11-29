import React, { Component } from "react";
import { addObjToArray } from "../../utils";
import obsModal from "../Modal/obsModal";
import obsOffence from "./obsOffence";

class AddMeleeAttack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      attackBonus: 0,
      damage: "",
      critical: "",
      type: "",
      notes: "",
      isHidden: false
    };
  }

  onAddClick(e) {
    e.preventDefault();
    addObjToArray(this.state, obsOffence.meleeAttacks);
    obsModal.show = !obsModal.show;
  }

  render() {
    return (
      <div className="panel">
        <div className="panel-header">{obsModal.modalBtnText}</div>
        <div className="wrapper">
          <form className="modal-form">
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="attackBonus">Attack Bonus</label>
              <input
                id="attackBonus"
                value={this.state.attackBonus}
                onChange={e => this.setState({ attackBonus: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="damage">Damage</label>
              <input
                id="damage"
                value={this.state.damage}
                onChange={e => this.setState({ damage: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="critical">Critical</label>
              <input
                id="critical"
                value={this.state.critical}
                onChange={e => this.setState({ critical: e.target.value })}
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
              <label htmlFor="notes">Notes</label>
              <input
                id="notes"
                value={this.state.notes}
                onChange={e => this.setState({ notes: e.target.value })}
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
      </div>
    );
  }
}

export default AddMeleeAttack;
