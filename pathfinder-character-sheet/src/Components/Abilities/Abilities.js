import React, { Component } from "react";
import Ability from "./Ability";

class Abilities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ""
    };
  }
  render() {
    return (
      <div className="panel">
        <div className="panel-header">Abilities</div>
        <Ability
          name="Strength"
          abilities={this.props.abilities}
          changeAbility={this.props.changeAbility}
        />
        <Ability
          name="Dexterity"
          abilities={this.props.abilities}
          changeAbility={this.props.changeAbility}
        />
        <Ability
          name="Constitution"
          abilities={this.props.abilities}
          changeAbility={this.props.changeAbility}
        />
        <Ability
          name="Intelligence"
          abilities={this.props.abilities}
          changeAbility={this.props.changeAbility}
        />
        <Ability
          name="Wisdom"
          abilities={this.props.abilities}
          changeAbility={this.props.changeAbility}
        />
        <Ability
          name="Charisma"
          abilities={this.props.abilities}
          changeAbility={this.props.changeAbility}
        />
      </div>
    );
  }
}

export default Abilities;
