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
      properties: ""
    };
  }

  onAddClick(e) {
    e.preventDefault();
    addObjToArray(this.state, obsEquipment.acItem);
    obsModal.show = !obsModal.show;
  }

  render() {
    return (
      <div className="panel">
        <div className="panel-header">Add AC Item</div>
        <div className="wrapper">
          <form>
            <div>
              <label htmlFor="name">name</label>
              <input
                id="name"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
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
          Add Item
        </button>
      </div>
    );
  }
}

export default AddACItem;
