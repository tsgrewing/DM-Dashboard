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
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    xp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    alignment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    race: {
      type: DataTypes.STRING,
      allowNull: false
    },
    str: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dex: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    con: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    int: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    wis: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cha: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    strSave: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dexSave: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    conSave: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    intSave: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    wisSave: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    chaSave: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    passiveWisdom: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hitdice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    armor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    initiative: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    }
  });

  Character.associate = function(models) {
    // We're saying that a Character should belong to an Author
    // A Character can't be created without an Author due to the foreign key constraint
    Character.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Character;
};
