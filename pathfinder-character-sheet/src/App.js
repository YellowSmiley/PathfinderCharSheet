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
      general: {
        characterName: "",
        alignment: "",
        playerName: "",
        characterClassLevel: "",
        deity: "",
        homeland: "",
        race: "",
        size: "",
        gender: "",
        age: "",
        height: "",
        hair: "",
        eyes: ""
      },
      abilities: {
        strength: {
          abilityScore: 0,
          abilityModifier: 0,
          tempScore: 0,
          tempModifier: 0
        },
        dexterity: {
          abilityScore: 0,
          abilityModifier: 0,
          tempScore: 0,
          tempModifier: 0
        },
        constitution: {
          abilityScore: 0,
          abilityModifier: 0,
          tempScore: 0,
          tempModifier: 0
        },
        intelligence: {
          abilityScore: 0,
          abilityModifier: 0,
          tempScore: 0,
          tempModifier: 0
        },
        wisdom: {
          abilityScore: 0,
          abilityModifier: 0,
          tempScore: 0,
          tempModifier: 0
        },
        charisma: {
          abilityScore: 0,
          abilityModifier: 0,
          tempScore: 0,
          tempModifier: 0
        }
      },
      defence: {
        armourClass: {
          total: 0,
          touch: 0,
          otherModifiers: 0,
          flatFooted: 0,
          armourBonus: 0,
          shieldBonus: 0,
          dexModifier: 0,
          sizeModifier: 0,
          naturalArmor: 0,
          deflection: 0,
          miscModifier: 0
        },
        hp: {
          total: 0,
          wounds: 0,
          nonLethalDamage: 0
        },
        damageReduction: 0,
        spellResistance: 0,
        fortitude: {
          total: 0,
          baseSave: 0,
          abilityModifier: 0,
          magicModifier: 0,
          miscModifier: 0,
          tempModifier: 0,
          otherModifiers: 0
        },
        reflex: {
          total: 0,
          baseSave: 0,
          abilityModifier: 0,
          magicModifier: 0,
          miscModifier: 0,
          tempModifier: 0,
          otherModifiers: 0
        },
        will: {
          total: 0,
          baseSave: 0,
          abilityModifier: 0,
          magicModifier: 0,
          miscModifier: 0,
          tempModifier: 0,
          otherModifiers: 0
        },
        resist: {
          total: 0,
          baseSave: 0,
          abilityModifier: 0,
          magicModifier: 0,
          miscModifier: 0,
          tempModifier: 0,
          otherModifiers: 0
        },
        immune: 0,
        combatManoeuvreDefence: {
          total: 0,
          baseAttackBonus: 0,
          strModifier: 0,
          dexModifier: 0,
          sizeModifiers: 0,
          miscModifier: 0,
          tempModifier: 0
        }
      },
      offence: {
        initiative: {
          total: 0,
          dexModifier: 0,
          miscModifier: 0
        },
        baseAttackBonus: 0,
        conditionalModifiers: 0,
        speedLand: {
          baseSpeed: 0,
          withArmour: 0,
          flyManoeuvrability: 0,
          burrow: 0,
          tempModifier: 0
        },
        combatManoeuvreBonus: {
          total: 0,
          baseAttackBonus: 0,
          strModifier: 0,
          sizeModifiers: 0,
          miscModifier: 0,
          tempModifier: 0
        },
        meleeAttacks: [
          {
            weapon: "",
            attackBonus: 0,
            damage: "",
            critical: "",
            type: "",
            notes: ""
          }
        ],
        skills: {
          acrobatics: {
            classSkill: 0,
            name: "",
            description: "",
            total: 0,
            abilityModifierType: "",
            abilityModifier: 0,
            ranks: 0,
            class: 0,
            racial: 0,
            trait: 0,
            misc: 0
          },
          appraise: {
            classSkill: 0,
            name: "",
            description: "",
            total: 0,
            abilityModifierType: "",
            abilityModifier: 0,
            ranks: 0,
            class: 0,
            racial: 0,
            trait: 0,
            misc: 0
          },
          bluff: {
            classSkill: 0,
            name: "",
            description: "",
            total: 0,
            abilityModifierType: "",
            abilityModifier: 0,
            ranks: 0,
            class: 0,
            racial: 0,
            trait: 0,
            misc: 0
          },
          climb: {
            classSkill: 0,
            name: "",
            description: "",
            total: 0,
            abilityModifierType: "",
            abilityModifier: 0,
            ranks: 0,
            class: 0,
            racial: 0,
            trait: 0,
            misc: 0
          },
          craft: [
            {
              classSkill: 0,
              name: "",
              description: "",
              total: 0,
              abilityModifierType: "",
              abilityModifier: 0,
              ranks: 0,
              class: 0,
              racial: 0,
              trait: 0,
              misc: 0
            }
          ],
          diplomacy: {
            classSkill: 0,
            name: "",
            description: "",
            total: 0,
            abilityModifierType: "",
            abilityModifier: 0,
            ranks: 0,
            class: 0,
            racial: 0,
            trait: 0,
            misc: 0
          },
          disableDevice: {
            classSkill: 0,
            name: "",
            description: "",
            total: 0,
            abilityModifierType: "",
            abilityModifier: 0,
            ranks: 0,
            class: 0,
            racial: 0,
            trait: 0,
            misc: 0
          },
          disguise: {
            classSkill: 0,
            name: "",
            description: "",
            total: 0,
            abilityModifierType: "",
            abilityModifier: 0,
            ranks: 0,
            class: 0,
            racial: 0,
            trait: 0,
            misc: 0
          },
          escapeArtist: {
            classSkill: 0,
            name: "",
            description: "",
            total: 0,
            abilityModifierType: "",
            abilityModifier: 0,
            ranks: 0,
            class: 0,
            racial: 0,
            trait: 0,
            misc: 0
          },
          fly: {
            classSkill: 0,
            name: "",
            description: "",
            total: 0,
            abilityModifierType: "",
            abilityModifier: 0,
            ranks: 0,
            class: 0,
            racial: 0,
            trait: 0,
            misc: 0
          },
          handleAnimal: {
            classSkill: 0,
            name: "",
            description: "",
            total: 0,
            abilityModifierType: "",
            abilityModifier: 0,
            ranks: 0,
            class: 0,
            racial: 0,
            trait: 0,
            misc: 0
          },
          heal: {
            classSkill: 0,
            name: "",
            description: "",
            total: 0,
            abilityModifierType: "",
            abilityModifier: 0,
            ranks: 0,
            class: 0,
            racial: 0,
            trait: 0,
            misc: 0
          },
          intimidate: {
            classSkill: 0,
            name: "",
            description: "",
            total: 0,
            abilityModifierType: "",
            abilityModifier: 0,
            ranks: 0,
            class: 0,
            racial: 0,
            trait: 0,
            misc: 0
          },
          knowledge: [
            {
              classSkill: 0,
              name: "",
              description: "",
              total: 0,
              abilityModifierType: "",
              abilityModifier: 0,
              ranks: 0,
              class: 0,
              racial: 0,
              trait: 0,
              misc: 0
            }
          ],
          linguistics: {
            classSkill: 0,
            name: "",
            description: "",
            total: 0,
            abilityModifierType: "",
            abilityModifier: 0,
            ranks: 0,
            class: 0,
            racial: 0,
            trait: 0,
            misc: 0
          },
          perception: {
            classSkill: 0,
            name: "",
            description: "",
            total: 0,
            abilityModifierType: "",
            abilityModifier: 0,
            ranks: 0,
            class: 0,
            racial: 0,
            trait: 0,
            misc: 0
          },
          perform: [
            {
              classSkill: 0,
              name: "",
              description: "",
              total: 0,
              abilityModifierType: "",
              abilityModifier: 0,
              ranks: 0,
              class: 0,
              racial: 0,
              trait: 0,
              misc: 0
            }
          ],
          profession: [
            {
              classSkill: 0,
              name: "",
              description: "",
              total: 0,
              abilityModifierType: "",
              abilityModifier: 0,
              ranks: 0,
              class: 0,
              racial: 0,
              trait: 0,
              misc: 0
            }
          ],
          ride: {
            classSkill: 0,
            name: "",
            description: "",
            total: 0,
            abilityModifierType: "",
            abilityModifier: 0,
            ranks: 0,
            class: 0,
            racial: 0,
            trait: 0,
            misc: 0
          },
          senseMotive: {
            classSkill: 0,
            name: "",
            description: "",
            total: 0,
            abilityModifierType: "",
            abilityModifier: 0,
            ranks: 0,
            class: 0,
            racial: 0,
            trait: 0,
            misc: 0
          },
          sleightOfHand: {
            classSkill: 0,
            name: "",
            description: "",
            total: 0,
            abilityModifierType: "",
            abilityModifier: 0,
            ranks: 0,
            class: 0,
            racial: 0,
            trait: 0,
            misc: 0
          },
          spellcraft: {
            classSkill: 0,
            name: "",
            description: "",
            total: 0,
            abilityModifierType: "",
            abilityModifier: 0,
            ranks: 0,
            class: 0,
            racial: 0,
            trait: 0,
            misc: 0
          },
          stealth: {
            classSkill: 0,
            name: "",
            description: "",
            total: 0,
            abilityModifierType: "",
            abilityModifier: 0,
            ranks: 0,
            class: 0,
            racial: 0,
            trait: 0,
            misc: 0
          },
          survival: {
            classSkill: 0,
            name: "",
            description: "",
            total: 0,
            abilityModifierType: "",
            abilityModifier: 0,
            ranks: 0,
            class: 0,
            racial: 0,
            trait: 0,
            misc: 0
          },
          swim: {
            classSkill: 0,
            name: "",
            description: "",
            total: 0,
            abilityModifierType: "",
            abilityModifier: 0,
            ranks: 0,
            class: 0,
            racial: 0,
            trait: 0,
            misc: 0
          },
          useMagicDevice: {
            classSkill: 0,
            name: "",
            description: "",
            total: 0,
            abilityModifierType: "",
            abilityModifier: 0,
            ranks: 0,
            class: 0,
            racial: 0,
            trait: 0,
            misc: 0
          },
          conditionalModifiersAndOtherNotes: "",
          languages: "",
          experiencePoints: {
            total: 0,
            nextLevel: 0
          }
        },
        feats: {
          mastered: [
            {
              name: "",
              type: "",
              notes: ""
            }
          ],
          specialAbilities: [
            {
              name: "",
              type: "",
              notes: ""
            }
          ],
          traits: [
            {
              name: "",
              type: "",
              notes: ""
            }
          ]
        },
        equipment: {
          money: [{ type: "", value: 0 }],
          acItem: [
            {
              name: "",
              bonus: 0,
              type: "",
              checkPenalty: 0,
              spellFailure: 0,
              weight: 0,
              properties: ""
            }
          ],
          gear: [
            {
              name: "",
              type: "",
              location: "",
              quantity: 0,
              weight: 0,
              notes: ""
            }
          ]
        },
        spells: {
          spellsKnown: {
            zeroth: 0,
            first: 0,
            second: 0,
            third: 0,
            forth: 0,
            fifth: 0,
            sixth: 0,
            seventh: 0,
            either: 0,
            ninth: 0
          },
          spellDc: {
            zeroth: 0,
            first: 0,
            second: 0,
            third: 0,
            forth: 0,
            fifth: 0,
            sixth: 0,
            seventh: 0,
            either: 0,
            ninth: 0
          },
          spellsPerDay: {
            zeroth: 0,
            first: 0,
            second: 0,
            third: 0,
            forth: 0,
            fifth: 0,
            sixth: 0,
            seventh: 0,
            either: 0,
            ninth: 0
          },
          bonusSpells: {
            zeroth: 0,
            first: 0,
            second: 0,
            third: 0,
            forth: 0,
            fifth: 0,
            sixth: 0,
            seventh: 0,
            either: 0,
            ninth: 0
          },
          conditionalModifiers: 0,
          speciality: "",
          spell: [
            {
              name: "",
              level: 0,
              school: "",
              subSchool: "",
              perDay: 0,
              used: 0,
              notes: "",
              description: ""
            }
          ],
          notes: ""
        }
      }
    };

    this.handleAbilitiesChange = this.handleAbilitiesChange.bind(this);
  }

  handleAbilitiesChange(type, abilityValue, value) {
    let newAbilities = this.state.abilities;
    switch (type) {
      case "strength":
        switch (abilityValue) {
          case "abilityScore":
            newAbilities.strength.abilityScore = value;
            break;
          case "abilityModifier":
            newAbilities.strength.abilityModifier = value;
            break;
          case "tempScore":
            newAbilities.strength.tempScore = value;
            break;
          case "tempModifier":
            newAbilities.strength.tempModifier = value;
            break;
          default:
            return false;
        }
        break;
      case "dexterity":
        switch (abilityValue) {
          case "abilityScore":
            newAbilities.dexterity.abilityScore = value;
            break;
          case "abilityModifier":
            newAbilities.dexterity.abilityModifier = value;
            break;
          case "tempScore":
            newAbilities.dexterity.tempScore = value;
            break;
          case "tempModifier":
            newAbilities.dexterity.tempModifier = value;
            break;
          default:
            return false;
        }
        break;
      case "constitution":
        switch (abilityValue) {
          case "abilityScore":
            newAbilities.constitution.abilityScore = value;
            break;
          case "abilityModifier":
            newAbilities.constitution.abilityModifier = value;
            break;
          case "tempScore":
            newAbilities.constitution.tempScore = value;
            break;
          case "tempModifier":
            newAbilities.constitution.tempModifier = value;
            break;
          default:
            return false;
        }
        break;
      case "intelligence":
        switch (abilityValue) {
          case "abilityScore":
            newAbilities.intelligence.abilityScore = value;
            break;
          case "abilityModifier":
            newAbilities.intelligence.abilityModifier = value;
            break;
          case "tempScore":
            newAbilities.intelligence.tempScore = value;
            break;
          case "tempModifier":
            newAbilities.intelligence.tempModifier = value;
            break;
          default:
            return false;
        }
        break;
      case "wisdom":
        switch (abilityValue) {
          case "abilityScore":
            newAbilities.wisdom.abilityScore = value;
            break;
          case "abilityModifier":
            newAbilities.wisdom.abilityModifier = value;
            break;
          case "tempScore":
            newAbilities.wisdom.tempScore = value;
            break;
          case "tempModifier":
            newAbilities.wisdom.tempModifier = value;
            break;
          default:
            return false;
        }
        break;
      case "charisma":
        switch (abilityValue) {
          case "abilityScore":
            newAbilities.charisma.abilityScore = value;
            break;
          case "abilityModifier":
            newAbilities.charisma.abilityModifier = value;
            break;
          case "tempScore":
            newAbilities.charisma.tempScore = value;
            break;
          case "tempModifier":
            newAbilities.charisma.tempModifier = value;
            break;
          default:
            return false;
        }
        break;
      default:
        return false;
    }
    this.setState({ abilities: newAbilities });
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
