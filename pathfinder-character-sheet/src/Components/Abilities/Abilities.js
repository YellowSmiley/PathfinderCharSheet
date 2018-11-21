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
          abilityValues={this.props.abilities.strength}
          handleAbilitiesChange={this.props.handleAbilitiesChange}
        />
        <Ability
          name="Dexterity"
          abilityValues={this.props.abilities.dexterity}
          handleAbilitiesChange={this.props.handleAbilitiesChange}
        />
        <Ability
          name="Constitution"
          abilityValues={this.props.abilities.constitution}
          handleAbilitiesChange={this.props.handleAbilitiesChange}
        />
        <Ability
          name="Intelligence"
          abilityValues={this.props.abilities.intelligence}
          handleAbilitiesChange={this.props.handleAbilitiesChange}
        />
        <Ability
          name="Wisdom"
          abilityValues={this.props.abilities.wisdom}
          handleAbilitiesChange={this.props.handleAbilitiesChange}
        />
        <Ability
          name="Charisma"
          abilityValues={this.props.abilities.charisma}
          handleAbilitiesChange={this.props.handleAbilitiesChange}
        />
      </div>
    );
  }
}

export default Abilities;
