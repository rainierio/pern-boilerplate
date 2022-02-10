const { DataTypes, fn } = require('sequelize');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const db = require('../config/db');
const { roles } = require('../config/roles');

// define user schema
const userSchema = db.define(
  'users',
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      isEmail: true,
      unique: true,
      allowNull: false,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      enum: roles,
      defaultValue: 'user',
    },
    isEmailVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    hooks: {
      beforeSave: async (user, option) => {
        if (user.changed('password')) {
          user.password = await bcrypt.hash(user.password, 8);
        }
      }
    },
    freezeTableName: true,
    timestamps: true,
  }
);

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */

userSchema.isEmailTaken = async function (email) {
  const user = await this.findOne().where('email', email);
  return !!user;
};

/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */

userSchema.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

module.exports = userSchema;
