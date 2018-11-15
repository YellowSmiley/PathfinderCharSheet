import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Summary from "./Components/Summary";
import General from "./Components/General";
import Abilities from "./Components/Abilities/Abilities";
// import Defence from "./Components/Defence";
// import Offence from "./Components/Offence";
// import Skills from "./Components/Skills";
// import Feats from "./Components/Feats";
// import Equipment from "./Components/Equipment";
// import Spells from "./Components/Spells";
// import Notes from "./Components/Notes";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ""
    };
  }
  render() {
    return (
      <Router>
        <div className="app">
          <header>Pathfinder Character Sheet</header>
          <div className="main-content">
            <Route exact path="/" component={Summary} />
            <Route path="/general" component={General} />
            <Route path="/abilities" component={Abilities} />
            {/* <Defence toggleDefence />
        <Offence toggleOffence />
        <Skills toggleSkills />
        <Feats toggleFeats />
        <Equipment toggleEquipment />
        <Spells toggleSpells />
        <Notes toggleNotes /> */}
          </div>
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
                  <Link to="/abilities/">Abilities</Link>
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
