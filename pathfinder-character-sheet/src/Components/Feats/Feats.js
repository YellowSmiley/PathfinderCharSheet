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
      const feats = obsFeats.feats;
      return (
        <div className="panel">
          <div className="panel-header">Feats</div>
          <div className="wrapper">
            <p>Use the + buttons to add the values to your Summary page!</p>
            <span className="spacer" />
            <p>Mastered</p>
            <form className="form-4-col">
              {mapArrayOfObjectsToInputsWithAddBtn(feats.mastered, "Mastered")}
            </form>
            <ModalButton
              modalBtnText="Add Mastered"
              modalBody={<AddFeat array={feats.mastered} />}
            />
            <span className="spacer" />
            <p>Special Abilities</p>
            <form className="form-4-col">
              {mapArrayOfObjectsToInputsWithAddBtn(
                feats.specialAbilities,
                "Special Abilities"
              )}
            </form>
            <ModalButton
              modalBtnText="Add Special Abilities"
              modalBody={<AddFeat array={feats.specialAbilities} />}
            />
            <span className="spacer" />
            <p>Traits</p>
            <form className="form-4-col">
              {mapArrayOfObjectsToInputsWithAddBtn(feats.traits, "Traits")}
            </form>
            <ModalButton
              modalBtnText="Add Traits"
              modalBody={<AddFeat array={feats.traits} />}
            />
            <span className="spacer" />
          </div>
        </div>
      );
    }
  }
);

export default Feats;
