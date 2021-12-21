const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { composeWithMongoose } = require("graphql-compose-mongoose");

const UserSchema = new Schema(
  {
    names: {type: String},
    lastnames: {type: String},
    identification: {type: Number},
    email: {type: String},
    password: {type: String},
    typeUser: {type: String},
    state: {type: String, default: "Pending"}
  },
);

module.exports = {
  UserSchema: mongoose.model("users", UserSchema),
  UserTC: composeWithMongoose(mongoose.model("users", UserSchema)),
};