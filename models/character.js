module.exports = function(sequelize, DataTypes) {
  const Character = sequelize.define("Character", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    class: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    level: {
      type: DataTypes.INTEGER,
      default: 1
    },
    xp: {
      type: DataTypes.INTEGER,
      default: 0
    },
    alignment: {
      type: DataTypes.STRING
    },
    race: {
      type: DataTypes.STRING
    },
    str: {
      type: DataTypes.INTEGER
    },
    dex: {
      type: DataTypes.INTEGER
    },
    con: {
      type: DataTypes.INTEGER
    },
    int: {
      type: DataTypes.INTEGER
    },
    wis: {
      type: DataTypes.INTEGER
    },
    cha: {
      type: DataTypes.INTEGER
    },
    strSave: {
      type: DataTypes.INTEGER
    },
    dexSave: {
      type: DataTypes.INTEGER
    },
    conSave: {
      type: DataTypes.INTEGER
    },
    intSave: {
      type: DataTypes.INTEGER
    },
    wisSave: {
      type: DataTypes.INTEGER
    },
    chaSave: {
      type: DataTypes.INTEGER
    },
    passiveWisdom: {
      type: DataTypes.INTEGER
    },
    hp: {
      type: DataTypes.INTEGER
    },
    hitdice: {
      type: DataTypes.INTEGER
    },
    armor: {
      type: DataTypes.INTEGER
    },
    initiative: {
      type: DataTypes.INTEGER
    },
    speed: {
      type: DataTypes.INTEGER
    },
    traits: {
      type: DataTypes.STRING
    },
    ideals: {
      type: DataTypes.STRING
    },
    bonds: {
      type: DataTypes.STRING
    },
    flaws: {
      type: DataTypes.STRING
    },
    acrobatics: {
      type: DataTypes.INTEGER
    },
    animalHandling: {
      type: DataTypes.INTEGER
    },
    arcana: {
      type: DataTypes.INTEGER
    },
    athletics: {
      type: DataTypes.INTEGER
    },
    deception: {
      type: DataTypes.INTEGER
    },
    history: {
      type: DataTypes.INTEGER
    },
    insight: {
      type: DataTypes.INTEGER
    },
    intimidation: {
      type: DataTypes.INTEGER
    },
    investigation: {
      type: DataTypes.INTEGER
    },
    medicine: {
      type: DataTypes.INTEGER
    },
    nature: {
      type: DataTypes.INTEGER
    },
    perception: {
      type: DataTypes.INTEGER
    },
    performance: {
      type: DataTypes.INTEGER
    },
    persuasion: {
      type: DataTypes.INTEGER
    },
    religion: {
      type: DataTypes.INTEGER
    },
    sleightOfHand: {
      type: DataTypes.INTEGER
    },
    stealth: {
      type: DataTypes.INTEGER
    },
    survival: {
      type: DataTypes.INTEGER
    }
  });

  Character.associate = function(models) {
    // We're saying that a Character should belong to an User
    // A Character can't be created without an User due to the foreign key constraint
    Character.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Character;
};
