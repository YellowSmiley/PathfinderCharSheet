import React, { Component } from "react";
import { addObjToArray } from "../../utils";
import obsModal from "../Modal/obsModal";

class AddSkill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classSkill: 0,
      name: "",
      description: "",
      total: 0,
      abilityModifierType: "",
      abilityModifier: 0,
      ranks: 0,
      class: 0,
      racial: 0,
      trait: 0,
      misc: 0,
      isHidden: true
    };
  }

  onAddClick(e) {
    e.preventDefault();
    addObjToArray(this.state, this.props.array);
    this.setState({
      classSkill: 0,
      name: "",
      description: "",
      total: 0,
      abilityModifierType: "",
      abilityModifier: 0,
      ranks: 0,
      class: 0,
      racial: 0,
      trait: 0,
      misc: 0
    });
    obsModal.show = !obsModal.show;
  }

  render() {
    return (
      <div className="panel">
        <div className="panel-header">{obsModal.modalBtnText}</div>
        <div className="wrapper">
          <form  className="modal-form">
          <div>
              <label htmlFor="classSkill">Class Skill</label>
              <input
                id="classSkill"
                value={this.state.classSkill}
                onChange={e => this.setState({ classSkill: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
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
            <div>
              <label htmlFor="total">Total</label>
              <input
                id="total"
                value={this.state.total}
                onChange={e => this.setState({ total: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="abilityModifierType">Ability Modifier Type</label>
              <input
                id="abilityModifierType"
                value={this.state.abilityModifierType}
                onChange={e => this.setState({ abilityModifierType: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="abilityModifier">Ability Modifier</label>
              <input
                id="abilityModifier"
                value={this.state.abilityModifier}
                onChange={e => this.setState({ abilityModifier: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="ranks">Ranks</label>
              <input
                id="ranks"
                value={this.state.ranks}
                onChange={e => this.setState({ ranks: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="class">Class</label>
              <input
                id="class"
                value={this.state.class}
                onChange={e => this.setState({ class: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="racial">Racial</label>
              <input
                id="racial"
                value={this.state.racial}
                onChange={e => this.setState({ racial: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="trait">Trait</label>
              <input
                id="trait"
                value={this.state.trait}
                onChange={e => this.setState({ trait: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="misc">Misc</label>
              <input
                id="misc"
                value={this.state.misc}
                onChange={e => this.setState({ misc: e.target.value })}
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

export default AddSkill;
