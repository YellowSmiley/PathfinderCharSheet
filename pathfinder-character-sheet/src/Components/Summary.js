import React, { Component } from "react";
import { observer } from "mobx-react";
import { mapObjectToInputs } from "../utils";
import obsAbilities from "./Abilities/obsAbilities";
import obsDefence from "./Defence/obsDefence";

// objIndex must be the index of both obsSummary hidden value and the obj
function mapObjectsToSummaryInputs(name, obj) {
  /*TODO: Get working with array and test with Objects*/
  const objAsArray = Object.entries(obj);
  const handleChange = e => (objAsArray[i][1].value = e.target.value);
  const handleClick = e => {
    e.preventDefault();
    objAsArray[i][1].isHidden = true;
  };
  for (var i = 0; i < objAsArray.length; i++) {
    if (objAsArray[i][1].isHidden === false) {
      return (
        <>
          <div>
            <label
              htmlFor={
                String.toCamelCase(name) + String.capitalize(objAsArray[i][0])
              }
            >
              {name}
            </label>
            <input
              id={
                String.toCamelCase(name) + String.capitalize(objAsArray[i][0])
              }
              value={objAsArray[i][1].value}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleClick} className="">
            -
          </button>
        </>
      );
    }
  }
}

const Summary = observer(
  class Summary extends Component {
    render() {
      /* TODO: Work out how to have a list of added objects and how to display the inputs of them */
      /* Could add to an obs of added objects and reference values from matching inputs */
      /* Could have a key of all available inputs and add or remove based on button clicks and render all in obsSummary*/
      /* -> Could have list of all and a button to change obs shown values */
      return (
        <div className="panel">
          <div className="panel-header">Summary</div>
          <div className="wrapper">
            <form>
              {/*mapObjectsToSummaryInputs("HP Total", obsDefence.hp, 0)*/}
              {/*mapObjectsToSummaryInputs("AC Total", obsDefence.armourClass, 0)*/}
              {mapObjectsToSummaryInputs("Str Mod", obsAbilities.strength)}
              {mapObjectsToSummaryInputs("Dex Mod", obsAbilities.dexterity)}
              {mapObjectsToSummaryInputs("Con Mod", obsAbilities.constitution)}
            </form>
          </div>
        </div>
      );
    }
  }
);

export default Summary;
