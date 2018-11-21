import React, { Component } from "react";
import { observer } from "mobx-react";
import obsFeats from "./obsFeats";
import { mapArrayOfObjectsToInputs } from "../../utils";

const Feats = observer(
  class Feats extends Component {
    render() {
      return (
        <div className="panel">
          <div className="panel-header">Feats</div>
          <div className="wrapper">
            <form>
              <p>Mastered</p>
              {mapArrayOfObjectsToInputs(obsFeats.mastered, "Mastered")}
              {/*TODO: Add ability to add items to obsFeats.mastered*/}
              <p>Special Abilities</p>
              {mapArrayOfObjectsToInputs(
                obsFeats.specialAbilities,
                "Special Abilities"
              )}
              {/*TODO: Add ability to add items to obsFeats.specialAbilities*/}
              <p>Traits</p>
              {mapArrayOfObjectsToInputs(obsFeats.traits, "Traits")}
              {/*TODO: Add ability to add items to obsFeats.traits*/}
            </form>
          </div>
        </div>
      );
    }
  }
);

export default Feats;
