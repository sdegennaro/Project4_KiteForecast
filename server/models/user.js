var express = require('express');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var crypto = require('crypto');

var UserSchema = mongoose.Schema({
  username: { type: String, required: true , unique: true},
  email: { type: String},
  password: { type: String },
  weight: { type: String },
  kiteBrand: { type: String },
  kitingSpotLongitude: { type: Number },
  kitingSpotLatitude: { type: Number }

}, { timestamps: true });

UserSchema.pre('save', function(next){
  if( this.isModified('password') ){
    this.password = bcrypt.hashSync(this.password, 10);
  }
  next();
});

UserSchema.methods.authenticate = function(passwordTry){
  return bcrypt.compareSync(passwordTry, this.password);
};

module.exports = mongoose.model('User', UserSchema);
