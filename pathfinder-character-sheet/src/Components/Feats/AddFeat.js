import React, { Component } from "react";
import { addObjToArray } from "../../utils";
import obsModal from "../Modal/obsModal";

class AddFeat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: "",
      notes: "",
      isHidden: true
    };
  }

  onAddClick(e) {
    e.preventDefault();
    addObjToArray(this.state, this.props.array);
    this.setState({
      name: "",
      type: "",
      notes: ""
    });
    obsModal.show = !obsModal.show;
  }

  render() {
    /* TODO: Can all these modal contents be made into one dynamic componet? */
    /* TODO: Make modal panel that fills width */
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

export default AddFeat;
