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

const Save = observer(
  class Save extends Component {
    constructor(props) {
      super(props);
      this.save = this.save.bind(this);
    }
    save() {
      if (supports_html5_storage()) {
        const data = {
          abilities: obsAbilities.abilities,
          defence: obsDefence.defence,
          equipment: obsEquipment.equipment,
          feats: obsFeats.feats,
          general: obsGeneral.general,
          notes: obsNotes.notes,
          offence: obsOffence.offence,
          skills: obsSkills.skills,
          spells: obsSpells.spells
        };
        localStorage["pathfinderData"] = JSON.stringify(data);
        console.log("Data on save:", data);
      } else {
        console.log("Unsupported Browser");
      }
    }
    render() {
      return (
        <button onClick={this.save} className="button-like-anchor">
          Save
        </button>
      );
    }
  }
);

export default Save;
