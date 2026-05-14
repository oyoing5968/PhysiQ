const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Muscle = sequelize.define('Muscle', {
  muscle_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'muscles',
  timestamps: false
});

module.exports = Muscle;