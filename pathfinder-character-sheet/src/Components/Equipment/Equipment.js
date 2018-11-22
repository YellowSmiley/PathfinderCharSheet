import React, { Component } from "react";
import { observer } from "mobx-react";
import obsEquipment from "./obsEquipment";
import { mapObjectToInputs, mapArrayOfObjectsToInputs } from "../../utils";
import Modal from "../Modal/Modal";
import AddACItem from "./AddACItem";

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
              <Modal modalBtnText="Add AC Item">
                <AddACItem />
              </Modal>
              {/*TODO: Add ability to add items to obsEquipment.acItem*/}
              <p>Gear</p>
              {mapArrayOfObjectsToInputs(obsEquipment.gear, "Gear")}
              {/*TODO: Add ability to add items to obsEquipment.gear*/}
            </form>
          </div>
        </div>
      );
    }
  }
);

export default Equipment;
