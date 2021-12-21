const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { composeWithMongoose } = require("graphql-compose-mongoose");
const AdvancesSchema = new Schema(
  {
   id_project: mongoose.ObjectId,
   progressDate: String,
   description: String,
   observation: String 
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = {
  AdvancesSchema: mongoose.model("advances", AdvancesSchema),
  AdvancesTC: composeWithMongoose(mongoose.model("advances", AdvancesSchema)),
};