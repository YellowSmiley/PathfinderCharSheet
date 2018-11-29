import React, { Component } from "react";
import { observer } from "mobx-react";
import obsFeats from "./obsFeats";
import { mapArrayOfObjectsToInputsWithAddBtn } from "../../utils";
import ModalButton from "../Modal/ModalButton";
import AddFeat from "./AddFeat";

const Feats = observer(
  class Feats extends Component {
    render() {
      /* TODO: Add, you need to add items to feats, text when no feats are shown and hide "use the..." text */
      /* TODO: Sort out layouts of array added items so they look neat, maybe make their own panel or table? */
      return (
        <div className="panel">
          <div className="panel-header">Feats</div>
          <div className="wrapper">
            <p>Use the + buttons to add the values to your Summary page!</p>
            <form className="feats-form">
              <p>Mastered</p>
              {mapArrayOfObjectsToInputsWithAddBtn(
                obsFeats.mastered,
                "Mastered"
              )}
              <ModalButton
                modalBtnText="Add Mastered"
                modalBody={<AddFeat array={obsFeats.mastered} />}
              />
            </form>
            <form className="feats-form">
              <p>Special Abilities</p>
              {mapArrayOfObjectsToInputsWithAddBtn(
                obsFeats.specialAbilities,
                "Special Abilities"
              )}
              <ModalButton
                modalBtnText="Add Special Abilities"
                modalBody={<AddFeat array={obsFeats.specialAbilities} />}
              />
            </form>
            <form className="feats-form">
              <p>Traits</p>
              {mapArrayOfObjectsToInputsWithAddBtn(obsFeats.traits, "Traits")}
              <ModalButton
                modalBtnText="Add Traits"
                modalBody={<AddFeat array={obsFeats.traits} />}
              />
            </form>
          </div>
        </div>
      );
    }
  }
);

export default Feats;
