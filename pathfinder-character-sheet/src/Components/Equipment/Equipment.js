import React, { Component } from "react";
import { observer } from "mobx-react";
import obsEquipment from "./obsEquipment";
import { mapObjectToInputs, mapArrayOfObjectsToInputs } from "../../utils";

const Equipment = observer(
  class Equipment extends Component {
    render() {
      return (
        <div className="panel">
          <div className="panel-header">Equipment</div>
          <div className="wrapper">
            <form>
              <p>Money</p>
              {mapObjectToInputs(obsEquipment.money, "Armour Class")}
              <p>AC Items</p>
              {mapArrayOfObjectsToInputs(obsEquipment.acItem, "AC Items")}
              <p>Gear</p>
              {mapArrayOfObjectsToInputs(obsEquipment.gear, "Gear")}
            </form>
          </div>
        </div>
      );
    }
  }
);

export default Equipment;
