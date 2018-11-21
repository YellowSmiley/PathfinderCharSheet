import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { setupReduxX } from "./reduxx";
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
      abilities: [
        {
          name: "strength",
          value: {
            abilityScore: 0,
            abilityModifier: 0,
            tempScore: 0,
            tempModifier: 0
          }
        },
        {
          name: "dexterity",
          value: {
            abilityScore: 0,
            abilityModifier: 0,
            tempScore: 0,
            tempModifier: 0
          }
        },
        {
          name: "constitution",
          value: {
            abilityScore: 0,
            abilityModifier: 0,
            tempScore: 0,
            tempModifier: 0
          }
        },
        {
          name: "intelligence",
          value: {
            abilityScore: 0,
            abilityModifier: 0,
            tempScore: 0,
            tempModifier: 0
          }
        },
        {
          name: "wisdom",
          value: {
            abilityScore: 0,
            abilityModifier: 0,
            tempScore: 0,
            tempModifier: 0
          }
        },
        {
          name: "charisma",
          value: {
            abilityScore: 0,
            abilityModifier: 0,
            tempScore: 0,
            tempModifier: 0
          }
        }
      ]
    };

    this.handleAbilitiesChange = this.handleAbilitiesChange.bind(this);

    setupReduxX(this);
  }

  render() {
    return (
      <Router>
        <div className="app">
          <header>Pathfinder Character Sheet</header>
          <div className="main-content">
            <Route
              exact
              path="/"
              render={props => (
                <Summary {...props} abilities={this.state.abilities} />
              )}
            />
            <Route
              path="/general"
              render={props => (
                <General
                  {...props}
                  general={this.state.general}
                  handleAbilitiesChange={this.handleAbilitiesChange}
                />
              )}
            />
            <Route
              path="/abilities"
              render={props => (
                <Abilities
                  {...props}
                  abilities={this.state.abilities}
                  handleAbilitiesChange={this.handleAbilitiesChange}
                />
              )}
            />
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
