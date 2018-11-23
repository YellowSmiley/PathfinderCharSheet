import React, { Component } from "react";
import { addObjToArray } from "../../utils";
import obsModal from "../Modal/obsModal";
import obsSpells from "./obsSpells";

class AddSpell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      level: 0,
      school: "",
      subSchool: "",
      perDay: 0,
      used: 0,
      notes: "",
      description: ""
    };
  }

  onAddClick(e) {
    e.preventDefault();
    addObjToArray(this.state, obsSpells.spell);
    obsModal.show = !obsModal.show;
  }

  render() {
    return (
      <div className="panel">
        <div className="panel-header">{obsModal.modalBtnText}</div>
        <div className="wrapper">
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="level">Level</label>
              <input
                id="level"
                value={this.state.level}
                onChange={e => this.setState({ level: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="school">School</label>
              <input
                id="school"
                value={this.state.school}
                onChange={e => this.setState({ school: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="subSchool">Sub School</label>
              <input
                id="subSchool"
                value={this.state.subSchool}
                onChange={e => this.setState({ subSchool: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="perDay">Per Day</label>
              <input
                id="perDay"
                value={this.state.perDay}
                onChange={e => this.setState({ perDay: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="used">Used</label>
              <input
                id="used"
                value={this.state.used}
                onChange={e => this.setState({ used: e.target.value })}
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
            <div>
              <label htmlFor="description">Description</label>
              <input
                id="description"
                value={this.state.description}
                onChange={e => this.setState({ description: e.target.value })}
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

export default AddSpell;
