"use strict";

var db = require('mongoose')

/**
 * User Schema
 */
var UserSchema = new db.Schema({
  username: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  firstname: {
    type: String,
    trim: true
  },
  lastname: {
    type: String,
    trim: true
  },
  is_active : {
    type: Boolean,
    default: true
  }
})

module.exports = db.model('Users', UserSchema)
