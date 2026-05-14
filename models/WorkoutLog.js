const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const WorkoutLog = sequelize.define('WorkoutLog', {
  wlog_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  exercise_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  log_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  sets: {
    type: DataTypes.INTEGER
  },
  reps: {
    type: DataTypes.INTEGER
  },
  weight_kg: {
    type: DataTypes.FLOAT
  },
  duration_min: {
    type: DataTypes.FLOAT
  },
  kcal_burned: {
    type: DataTypes.FLOAT
  }
}, {
  tableName: 'workout_logs',
  timestamps: true
});

module.exports = WorkoutLog;