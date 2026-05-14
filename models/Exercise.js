const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Exercise = sequelize.define('Exercise', {
  exercise_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name_: {
    type: DataTypes.STRING
  },
  category: {
    type: DataTypes.STRING
  },
  force: {
    type: DataTypes.STRING,
    field: 'force'
  },
  level: {
    type: DataTypes.STRING,
    field: 'level'
  },
  mechanic: {
    type: DataTypes.STRING
  },
  equipment: {
    type: DataTypes.STRING
  },
  instructions: {
    type: DataTypes.TEXT
  }
}, {
  tableName: 'exercises',
  timestamps: false
});

module.exports = Exercise;