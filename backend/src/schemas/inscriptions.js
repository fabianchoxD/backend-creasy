const { InscriptionTC, InscriptionSchema  } = require("../model/inscriptions");

InscriptionTC.addResolver({
    name: "create",
    kind: "mutation",
    type: InscriptionTC.getResolver("createOne").getType(),
    args: InscriptionTC.getResolver("createOne").getArgs(),
    resolve: async ({ source, args, context, info }) => {
        const inscription = await InscriptionSchema.create(args.record);

        return {
            record: inscription,
            recordId: InscriptionTC.getRecordIdFn()(inscription),
        };
    },
});

const InscriptionQuery = {
    inscriptionById: InscriptionTC.getResolver("findById"),
    inscriptionByIds: InscriptionTC.getResolver("findByIds"),
    inscriptionOne: InscriptionTC.getResolver("findOne"),
    inscriptionMany: InscriptionTC.getResolver("findMany"),
    inscriptionCount: InscriptionTC.getResolver("count")
};

const InscriptionMutation = {
    inscriptionCreateOne: InscriptionTC.getResolver("createOne"),
    inscriptionUpdateById: InscriptionTC.getResolver("updateById"),
    inscriptionRemoveById: InscriptionTC.getResolver("removeById")
};

module.exports = { InscriptionQuery: InscriptionQuery, InscriptionMutation: InscriptionMutation };