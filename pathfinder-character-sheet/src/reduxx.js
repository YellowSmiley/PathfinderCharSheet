import * as ReduxX from "reduxx";
const { VALUE } = ReduxX;

export const reduxX = ReduxX({
  initialState: {
    general: {
      [VALUE]: {
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
      }
    },
    abilities: {
      strength: {
        [VALUE]: {
          abilityScore: 0,
          abilityModifier: 0,
          tempScore: 0,
          tempModifier: 0
        }
      },
      dexterity: {
        [VALUE]: {
          abilityScore: 0,
          abilityModifier: 0,
          tempScore: 0,
          tempModifier: 0
        }
      },
      constitution: {
        [VALUE]: {
          abilityScore: 0,
          abilityModifier: 0,
          tempScore: 0,
          tempModifier: 0
        }
      },
      intelligence: {
        [VALUE]: {
          abilityScore: 0,
          abilityModifier: 0,
          tempScore: 0,
          tempModifier: 0
        }
      },
      wisdom: {
        [VALUE]: {
          abilityScore: 0,
          abilityModifier: 0,
          tempScore: 0,
          tempModifier: 0
        }
      },
      charisma: {
        [VALUE]: {
          abilityScore: 0,
          abilityModifier: 0,
          tempScore: 0,
          tempModifier: 0
        }
      }
    },
    defence: {
      armourClass: {
        [VALUE]: {
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
        }
      },
      hp: {
        [VALUE]: {
          total: 0,
          wounds: 0,
          nonLethalDamage: 0
        }
      },
      damageReduction: {
        [VALUE]: 0
      },
      spellResistance: {
        [VALUE]: 0
      },
      fortitude: {
        [VALUE]: {
          total: 0,
          baseSave: 0,
          abilityModifier: 0,
          magicModifier: 0,
          miscModifier: 0,
          tempModifier: 0,
          otherModifiers: 0
        }
      },
      reflex: {
        [VALUE]: {
          total: 0,
          baseSave: 0,
          abilityModifier: 0,
          magicModifier: 0,
          miscModifier: 0,
          tempModifier: 0,
          otherModifiers: 0
        }
      },
      will: {
        [VALUE]: {
          total: 0,
          baseSave: 0,
          abilityModifier: 0,
          magicModifier: 0,
          miscModifier: 0,
          tempModifier: 0,
          otherModifiers: 0
        }
      },
      resist: {
        [VALUE]: {
          total: 0,
          baseSave: 0,
          abilityModifier: 0,
          magicModifier: 0,
          miscModifier: 0,
          tempModifier: 0,
          otherModifiers: 0
        }
      },
      immune: {
        [VALUE]: 0
      },
      combatManoeuvreDefence: {
        [VALUE]: {
          total: 0,
          baseAttackBonus: 0,
          strModifier: 0,
          dexModifier: 0,
          sizeModifiers: 0,
          miscModifier: 0,
          tempModifier: 0
        }
      }
    },
    offence: {
      initiative: {
        [VALUE]: {
          total: 0,
          dexModifier: 0,
          miscModifier: 0
        }
      },
      baseAttackBonus: {
        [VALUE]: 0
      },
      conditionalModifiers: {
        [VALUE]: 0
      },
      speedLand: {
        [VALUE]: {
          baseSpeed: 0,
          withArmour: 0,
          flyManoeuvrability: 0,
          burrow: 0,
          tempModifier: 0
        }
      },
      combatManoeuvreBonus: {
        [VALUE]: {
          total: 0,
          baseAttackBonus: 0,
          strModifier: 0,
          sizeModifiers: 0,
          miscModifier: 0,
          tempModifier: 0
        }
      },
      meleeAttacks: {
        [VALUE]: [
          {
            weapon: "",
            attackBonus: 0,
            damage: "",
            critical: "",
            type: "",
            notes: ""
          }
        ]
      }
    },
    skills: {
      acrobatics: {
        [VALUE]: {
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
      },
      appraise: {
        [VALUE]: {
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
      },
      bluff: {
        [VALUE]: {
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
      },
      climb: {
        [VALUE]: {
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
      },
      craft: {
        [VALUE]: [
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
        ]
      },
      diplomacy: {
        [VALUE]: {
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
      },
      disableDevice: {
        [VALUE]: {
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
      },
      disguise: {
        [VALUE]: {
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
      },
      escapeArtist: {
        [VALUE]: {
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
      },
      fly: {
        [VALUE]: {
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
      },
      handleAnimal: {
        [VALUE]: {
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
      },
      heal: {
        [VALUE]: {
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
      },
      intimidate: {
        [VALUE]: {
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
      },
      knowledge: {
        [VALUE]: [
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
        ]
      },
      linguistics: {
        [VALUE]: {
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
      },
      perception: {
        [VALUE]: {
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
      },
      perform: {
        [VALUE]: [
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
        ]
      },
      profession: {
        [VALUE]: [
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
        ]
      },
      ride: {
        [VALUE]: {
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
      },
      senseMotive: {
        [VALUE]: {
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
      },
      sleightOfHand: {
        [VALUE]: {
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
      },
      spellcraft: {
        [VALUE]: {
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
      },
      stealth: {
        [VALUE]: {
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
      },
      survival: {
        [VALUE]: {
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
      },
      swim: {
        [VALUE]: {
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
      },
      useMagicDevice: {
        [VALUE]: {
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
      },
      conditionalModifiersAndOtherNotes: { [VALUE]: "" },
      languages: { [VALUE]: "" },
      experiencePoints: {
        [VALUE]: {
          total: 0,
          nextLevel: 0
        }
      }
    },
    feats: {
      mastered: {
        [VALUE]: [
          {
            name: "",
            type: "",
            notes: ""
          }
        ]
      },
      specialAbilities: {
        [VALUE]: [
          {
            name: "",
            type: "",
            notes: ""
          }
        ]
      },
      traits: {
        [VALUE]: [
          {
            name: "",
            type: "",
            notes: ""
          }
        ]
      }
    },
    equipment: {
      money: {
        [VALUE]: [{ type: "", value: 0 }]
      },
      acItem: {
        [VALUE]: [
          {
            name: "",
            bonus: 0,
            type: "",
            checkPenalty: 0,
            spellFailure: 0,
            weight: 0,
            properties: ""
          }
        ]
      },
      gear: {
        [VALUE]: [
          {
            name: "",
            type: "",
            location: "",
            quantity: 0,
            weight: 0,
            notes: ""
          }
        ]
      }
    },
    spells: {
      spellsKnown: {
        [VALUE]: {
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
        }
      },
      spellDc: {
        [VALUE]: {
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
        }
      },
      spellsPerDay: {
        [VALUE]: {
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
        }
      },
      bonusSpells: {
        [VALUE]: {
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
        }
      },
      conditionalModifiers: { [VALUE]: 0 },
      speciality: { [VALUE]: "" },
      spell: {
        [VALUE]: [
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
        ]
      }
    },
    notes: { [VALUE]: "" }
  }
});
