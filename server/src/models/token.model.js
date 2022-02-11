const { DataTypes } = require('sequelize');
const db = require('../config/db');
// const { toJSON } = require('./plugins');
const { tokenTypes } = require('../config/tokens');

const tokenSchema = db.define(
  'token',
  {
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user: {
      type: DataTypes.STRING, // bef: mongoose.SchemaTypes.ObjectId,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM(tokenTypes.RESET_PASSWORD, tokenTypes.REFRESH, tokenTypes.VERIFY_EMAIL),
      allowNull: false,
    },
    expires: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    blacklisted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
// tokenSchema.plugin(toJSON);
module.exports = tokenSchema;
