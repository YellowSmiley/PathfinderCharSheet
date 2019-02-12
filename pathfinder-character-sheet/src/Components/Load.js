import React, { Component } from "react";
import { observer } from "mobx-react";
import { supports_html5_storage } from "../utils";
import obsAbilities from "./Abilities/obsAbilities";
import obsDefence from "./Defence/obsDefence";
import obsEquipment from "./Equipment/obsEquipment";
import obsFeats from "./Feats/obsFeats";
import obsGeneral from "./General/obsGeneral";
import obsNotes from "./Notes/obsNotes";
import obsOffence from "./Offence/obsOffence";
import obsSkills from "./Skills/obsSkills";
import obsSpells from "./Spells/obsSpells";

const Load = observer(
  class Load extends Component {
    constructor(props) {
      super(props);
      this.load = this.load.bind(this);
    }
    load() {
      if (supports_html5_storage()) {
        const data = JSON.parse(localStorage["pathfinderData"]);
        if (data) {
          console.log("Data on load:", data);
          obsAbilities.abilities = data.abilities;
          obsDefence.defence = data.defence;
          obsEquipment.equipment = data.equipment;
          obsFeats.feats = data.feats;
          obsGeneral.general = data.general;
          obsNotes.notes = data.notes;
          obsOffence.offence = data.offence;
          obsSkills.skills = data.skills;
          obsSpells.spells = data.spells;
        } else {
          console.log("No saved data found!");
        }
      } else {
        console.log("Unsupported Browser");
      }
    }
    render() {
      //TODO: Load from DB instead of localStorage
      return (
        <button onClick={this.load} className="button-like-anchor">
          Load
        </button>
      );
    }
  }
);

export default Load;
