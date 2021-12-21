const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { composeWithMongoose } = require("graphql-compose-mongoose");
//const ObjectId = require('mongodb').ObjectID;
//let _idObject = ObjectId(args._id)
const ProjectSchema = new Schema(
  {
    projectName: {type: String},
    budget: {type: Number},
    generalObjective: {type: String},
    specificObjective: {type: String},
    startDate: {type: String},
    finishDate: {type: String},
    state: {type: String, default:"Inactive"},
    projectPhase: {type: String,default:"Pending"},
    leadership: [
        {
	        //id_user: {type: ObjectId},
            identificationDocument: {type: Number},
            name: {type: String}
        }
    ]
  },
);

module.exports = {
  ProjectSchema: mongoose.model("projects", ProjectSchema),
  ProjectTC: composeWithMongoose(mongoose.model("projects", ProjectSchema)),
};