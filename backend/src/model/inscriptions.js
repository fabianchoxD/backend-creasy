const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { composeWithMongoose } = require("graphql-compose-mongoose");
const InscriptionSchema = new Schema(
    {
        id_project: mongoose.ObjectId,
        id_student: mongoose.ObjectId,
        state: String,
        entryDate: String,
        egressDate: String
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = {
    InscriptionSchema: mongoose.model("inscriptions", InscriptionSchema),
    InscriptionTC: composeWithMongoose(mongoose.model("inscriptions", InscriptionSchema)),
};