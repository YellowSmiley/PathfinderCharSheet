import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Summary from "./Components/Summary";
import General from "./Components/General/General";
import Abilities from "./Components/Abilities/Abilities";
import Defence from "./Components/Defence/Defence";
import Offence from "./Components/Offence/Offence";
import Skills from "./Components/Skills/Skills";
import Feats from "./Components/Feats/Feats";
import Equipment from "./Components/Equipment/Equipment";
import Spells from "./Components/Spells/Spells";
import Notes from "./Components/Notes/Notes";
import Modal from "./Components/Modal/Modal";
import Save from "./Components/Save";
import Load from "./Components/Load";
import "./App.css";

class App extends Component {
  render() {
    /* TODO: Add save and load features based on who's logged in - Need to make an API and DB to store */
    /* TODO: Add login page or use oAuth like Google? */
    return (
      <Router>
        <div className="app">
          <header>Pathfinder Character Sheet</header>
          <Route exact path="/" component={Summary} />
          <Route path="/general" component={General} />
          <Route path="/abilities" component={Abilities} />
          <Route path="/defence" component={Defence} />
          <Route path="/offence" component={Offence} />
          <Route path="/skills" component={Skills} />
          <Route path="/feats" component={Feats} />
          <Route path="/equipment" component={Equipment} />
          <Route path="/spells" component={Spells} />
          <Route path="/notes" component={Notes} />
          <Modal />
          <footer>
            <nav>
              <ul>
                <li>
                  <Link to="/">Summary</Link>
                </li>
                <li>
                  <Link to="/general">General</Link>
                </li>
                <li>
                  <Link to="/abilities">Abilities</Link>
                </li>
                <li>
                  <Link to="/defence">Defence</Link>
                </li>
                <li>
                  <Link to="/offence">Offence</Link>
                </li>
                <li>
                  <Link to="/skills">Skills</Link>
                </li>
                <li>
                  <Link to="/feats">Feats</Link>
                </li>
                <li>
                  <Link to="/equipment">Equipment</Link>
                </li>
                <li>
                  <Link to="/spells">Spells</Link>
                </li>
                <li>
                  <Link to="/notes">Notes</Link>
                </li>
                <li>
                  <Save />
                </li>
                <li>
                  <Load />
                </li>
              </ul>
            </nav>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
