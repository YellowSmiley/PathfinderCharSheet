import React, { Component } from "react";
import { addObjToArray } from "../../utils";
import obsModal from "../Modal/obsModal";
import obsEquipment from "./obsEquipment";

class AddGear extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: "",
      location: "",
      quantity: 0,
      weight: 0,
      notes: "",
      isHidden: true
    };
  }

  onAddClick(e) {
    e.preventDefault();
    addObjToArray(this.state, obsEquipment.gear);
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
              <label htmlFor="type">Type</label>
              <input
                id="type"
                value={this.state.type}
                onChange={e => this.setState({ type: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <input
                id="location"
                value={this.state.location}
                onChange={e => this.setState({ location: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="quantity">Quantity</label>
              <input
                id="quantity"
                value={this.state.quantity}
                onChange={e => this.setState({ quantity: e.target.value })}
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
        <span className="spacer" />
      </>
    );
  }
}

export default AddGear;
