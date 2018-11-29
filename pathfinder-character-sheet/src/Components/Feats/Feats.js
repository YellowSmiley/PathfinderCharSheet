import React, { Component } from "react";
import { observer } from "mobx-react";
import obsFeats from "./obsFeats";
import { mapArrayOfObjectsToInputsWithAddBtn } from "../../utils";
import ModalButton from "../Modal/ModalButton";
import AddFeat from "./AddFeat";

const Feats = observer(
  class Feats extends Component {
    render() {
      return (
        <div className="panel">
          <div className="panel-header">Feats</div>
          <div className="wrapper">
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
              <p>Special Abilities</p>
              {mapArrayOfObjectsToInputsWithAddBtn(
                obsFeats.specialAbilities,
                "Special Abilities"
              )}
              <ModalButton
                modalBtnText="Add Special Abilities"
                modalBody={<AddFeat array={obsFeats.specialAbilities} />}
              />
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
