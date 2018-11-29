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
      return (
        <div className="panel">
          <div className="panel-header">Equipment</div>
          <div className="wrapper">
            <p>Use the + buttons to add the values to your Summary page!</p>
            <form className="equipment-form">
              <p>Money</p>
              {mapObjectToInputsWithAddBtn(obsEquipment.money, "Armour Class")}
            </form>
            <form className="equipment-form">
              <p>AC Items</p>
              {mapArrayOfObjectsToInputsWithAddBtn(
                obsEquipment.acItem,
                "AC Items"
              )}
              <ModalButton
                modalBtnText="Add AC Item"
                modalBody={<AddACItem />}
              />
            </form>
            <form className="equipment-form">
              <p>Gear</p>
              {mapArrayOfObjectsToInputsWithAddBtn(obsEquipment.gear, "Gear")}
              <ModalButton modalBtnText="Add Gear" modalBody={<AddGear />} />
            </form>
          </div>
        </div>
      );
    }
  }
);

export default Equipment;
