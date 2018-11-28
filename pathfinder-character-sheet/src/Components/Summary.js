import React, { Component } from "react";
import { observer } from "mobx-react";
import obsAbilities from "./Abilities/obsAbilities";
import obsDefence from "./Defence/obsDefence";
import obsOffence from "./Offence/obsOffence";

// objIndex must be the index of both obsSummary hidden value and the obj
function mapObjectsToSummaryInputs(name, obj) {
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

function mapArrayOfObjectsToSummaryInputs(name, array) {
  const inputs = array.map((obj, i) => {
    /*TODO: Add titles for each */
    if (array[i].isHidden === false) {
      let inp = Object.entries(array[i]).map((item, index) => {
        return item[0] !== "isHidden" ? (
          <>
            <div>
              <label
                htmlFor={String.toCamelCase(name) + String.capitalize(item[0])}
              >
                {String.camelCaseToCapitalisedAndSpaced(item[0])}
              </label>
              <input
                id={String.toCamelCase(name) + String.capitalize(item[0])}
                value={item[1]}
                onChange={e => (item[1] = e.target.value)}
              />
            </div>
          </>
        ) : null;
      });

      const btn = (
        <button
          type="submit"
          onClick={e => {
            e.preventDefault();
            array[i].isHidden = true;
          }}
          className=""
        >
          -
        </button>
      );

      inp.push(btn);

      return inp;
    } else {
      return null;
    }
  });
  return inputs;
}

const Summary = observer(
  class Summary extends Component {
    render() {
      /* TODO: Work out how to have a list of hidden objects and how to display the inputs of them */
      return (
        <div className="panel">
          <div className="panel-header">Summary</div>
          <div className="wrapper">
            <form>
              {mapObjectsToSummaryInputs("HP", obsDefence.hp)}
              {mapObjectsToSummaryInputs("AC", obsDefence.armourClass)}
              {mapObjectsToSummaryInputs("Fort", obsDefence.fortitude)}
              {mapObjectsToSummaryInputs("Reflex", obsDefence.reflex)}
              {mapObjectsToSummaryInputs("Will", obsDefence.will)}
              {mapObjectsToSummaryInputs("Resist", obsDefence.resist)}
              {mapObjectsToSummaryInputs("Str", obsAbilities.strength)}
              {mapObjectsToSummaryInputs("Dex", obsAbilities.dexterity)}
              {mapObjectsToSummaryInputs("Con", obsAbilities.constitution)}
              {mapArrayOfObjectsToSummaryInputs("Atk", obsOffence.meleeAttacks)}
            </form>
          </div>
        </div>
      );
    }
  }
);

export default Summary;
