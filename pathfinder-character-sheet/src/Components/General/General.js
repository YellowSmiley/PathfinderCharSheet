import React, { Component } from "react";
import { observer } from "mobx-react";
import obsGeneral from "./obsGeneral";
import { mapObjectToInputsWithAddBtn } from "../../utils";

const General = observer(
  class General extends Component {
    render() {
      return (
        <div className="panel">
          <div className="panel-header">General</div>
          <div className="wrapper">
            <p>Use the + buttons to add the values to your Summary page!</p>
            <form className="general-form">
              {mapObjectToInputsWithAddBtn(obsGeneral, "General")}
            </form>
          </div>
        </div>
      );
    }
  }
);

export default General;
