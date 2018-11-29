import React, { Component } from "react";
import { observer } from "mobx-react";
import obsNotes from "./obsNotes";

const Notes = observer(
  class Notes extends Component {
    render() {
      return (
        <div className="panel">
          <div className="panel-header">Notes</div>
          <div className="wrapper">
            <form>
              <div>
                <label htmlFor="notes">Notes</label>
                <textarea
                  id="notes"
                  rows="4"
                  value={obsNotes.notes.value}
                  onChange={e => (obsNotes.notes.value = e.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
);

export default Notes;
