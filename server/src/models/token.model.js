const { DataTypes } = require('sequelize');
const db = require('../config/db');
const { toJSON } = require('./plugins');
const { tokenTypes } = require('../config/tokens');

const tokenSchema = db.define(
  'token',
  {
    token: {
      type: DataTypes.STRING,
      required: true,
      index: true,
    },
    user: {
      type: DataTypes.STRING, // bef: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      enum: [tokenTypes.REFRESH, tokenTypes.RESET_PASSWORD, tokenTypes.VERIFY_EMAIL],
      allowNull: false,
    },
    expires: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    blacklisted: {
      type: Boolean,
      default: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
tokenSchema.plugin(toJSON);

module.exports = tokenSchema;
