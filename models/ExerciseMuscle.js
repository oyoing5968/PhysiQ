const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ExerciseMuscle = sequelize.define('ExerciseMuscle', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  exercise_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  muscle_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'exercise_muscles',
  timestamps: false
});

module.exports = ExerciseMuscle;