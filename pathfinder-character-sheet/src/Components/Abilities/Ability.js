import React, { Component } from "react";

class Ability extends Component {
  constructor(props) {
    super(props);

    this.handleChangeAbility = this.handleChangeAbility.bind(this);
  }

  handleChangeAbility(value, ability) {
    this.props.changeAbility(this.props.name.toLowerCase(), ability, value);
  }

  render() {
    let formAbility = [];
    for (let i = 0; i < this.props.abilities.length; i++) {
      if (this.props.abilities[i].name === this.props.name.toLowerCase()) {
        formAbility = this.props.abilities[i].value;
        break;
      }
    }
    return (
      <div>
        <p>{this.props.name}</p>
        <div className="wrapper">
          <form>
            <div>
              <label htmlFor="abilityScore">Ability Score</label>
              <input
                id="abilityScore"
                value={formAbility[0].value}
                onChange={e =>
                  this.handleChangeAbility(e.target.value, "abilityModifier")
                }
              />
            </div>
            <div>
              <label htmlFor="abilityModifier">Ability Modifier</label>
              <input
                id="abilityModifier"
                value={formAbility[1].value}
                onChange={e =>
                  this.handleChangeAbility(e.target.value, "abilityModifier")
                }
              />
            </div>
            <div>
              <label htmlFor="tempScore">Temp Score</label>
              <input
                id="tempScore"
                value={formAbility[2].value}
                onChange={e =>
                  this.handleChangeAbility(e.target.value, "abilityModifier")
                }
              />
            </div>
            <div>
              <label htmlFor="tempModifier">Temp Modifier</label>
              <input
                id="tempModifier"
                value={formAbility[3].value}
                onChange={e =>
                  this.handleChangeAbility(e.target.value, "abilityModifier")
                }
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Ability;
