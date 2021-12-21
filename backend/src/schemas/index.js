const { SchemaComposer } = require('graphql-compose');

const schemaComposer = new SchemaComposer();

const { UserQuery, UserMutation } = require('./users');
const { ProjectQuery, ProjectMutation } = require('./projects');
const { AdvancesQuery, AdvancesMutation } = require('./advances');
const { InscriptionQuery, InscriptionMutation } = require('./inscriptions');

schemaComposer.Query.addFields({
    ...UserQuery,
    ...ProjectQuery,
    ...AdvancesQuery,
    ...InscriptionQuery
});

schemaComposer.Mutation.addFields({
    ...UserMutation,
    ...ProjectMutation,
    ...AdvancesMutation,
    ...InscriptionMutation
});

module.exports = schemaComposer.buildSchema();