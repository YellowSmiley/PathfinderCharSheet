import React, { Component } from "react";
import { observer } from "mobx-react";
import obsEquipment from "./obsEquipment";
import {
  mapObjectToInputsWithAddBtn,
  mapArrayOfObjectsToInputsWithAddBtn
} from "../../utils";
import ModalButton from "../Modal/ModalButton";
import AddACItem from "./AddACItem";
import AddGear from "./AddGear";

const Equipment = observer(
  class Equipment extends Component {
    render() {
      const equipment = obsEquipment.equipment;
      return (
        <div className="panel">
          <div className="panel-header">Equipment</div>
          <div className="wrapper">
            <p>Use the + buttons to add the values to your Summary page!</p>
            <form className="form-5-col">
              <p>Money</p>
              {mapObjectToInputsWithAddBtn(equipment.money, "Armour Class")}
            </form>
            <p>AC Items</p>
            <form className="form-8-col">
              {mapArrayOfObjectsToInputsWithAddBtn(
                equipment.acItem,
                "AC Items"
              )}
            </form>
            <ModalButton modalBtnText="Add AC Item" modalBody={<AddACItem />} />
            <span className="spacer" />
            <p>Gear</p>
            <form className="form-7-col">
              {mapArrayOfObjectsToInputsWithAddBtn(equipment.gear, "Gear")}
            </form>
            <ModalButton modalBtnText="Add Gear" modalBody={<AddGear />} />
            <span className="spacer" />
          </div>
        </div>
      );
    }
  }
);

export default Equipment;
