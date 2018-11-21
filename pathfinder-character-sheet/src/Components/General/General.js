import React, { Component } from "react";
import { observer } from "mobx-react";
import obsGeneral from "./obsGeneral";
import { mapObjectToInputs } from "../../utils";

const General = observer(
  class General extends Component {
    render() {
      return (
        <div className="panel">
          <div className="panel-header">General</div>
          <div className="wrapper">
            <form>{mapObjectToInputs(obsGeneral, "General")}</form>
          </div>
        </div>
      );
    }
  }
);

export default General;
