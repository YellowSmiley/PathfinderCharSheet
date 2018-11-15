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
        <Ability name="Strength" />
        <Ability name="Dexterity" />
        <Ability name="Constitution" />
        <Ability name="Intelligence" />
        <Ability name="Wisdom" />
        <Ability name="Charisma" />
      </div>
    );
  }
}

export default Abilities;
