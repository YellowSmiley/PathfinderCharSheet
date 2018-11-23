import React, { Component } from "react";
import obsSummary from "./obsSummary";

class Summary extends Component {
  constructor(props) {
    super(props);
    /* You could put them all in here and update live, hiding when removed */
    this.state = {
      test: ""
    };
  }
  render() {
    /* TODO: Work out how to have a list of added objects and how to display the inputs of them */
    /* Could add to an obs of added objects and reference values from matching inputs */
    return (
      <div className="App">
        {/* TODO: Show list of added inputs with remove button*/}
      </div>
    );
  }
}

export default Summary;
