const { AdvancesTC, AdvancesSchema  } = require("../model/advances");

AdvancesTC.addResolver({
    name: "create",
    kind: "mutation",
    type: AdvancesTC.getResolver("createOne").getType(),
    args: AdvancesTC.getResolver("createOne").getArgs(),
    resolve: async ({ source, args, context, info }) => {
        const advances = await AdvancesSchema.create(args.record);

        return {
            record: advances,
            recordId: AdvancesTC.getRecordIdFn()(advances),
        };
    },
});

const AdvancesQuery = {
    advancesById: AdvancesTC.getResolver("findById"),
    advancesByIds: AdvancesTC.getResolver("findByIds"),
    advancesOne: AdvancesTC.getResolver("findOne"),
    advancesMany: AdvancesTC.getResolver("findMany"),
    advancesCount: AdvancesTC.getResolver("count"),
    //advancesConnection: AdvancesTC.getResolver("connection"),
    //advancesPagination: AdvancesTC.getResolver("pagination"),
};

const AdvancesMutation = {
    advancesCreateOne: AdvancesTC.getResolver("createOne"),
    //advancesCreateMany: AdvancesTC.getResolver("createMany"),
    advancesUpdateById: AdvancesTC.getResolver("updateById"),
    //advancesUpdateOne: AdvancesTC.getResolver("updateOne"),
    //advancesUpdateMany: AdvancesTC.getResolver("updateMany"),
    advancesRemoveById: AdvancesTC.getResolver("removeById"),
    //advancesRemoveOne: AdvancesTC.getResolver("removeOne"),
    //advancesRemoveMany: AdvancesTC.getResolver("removeMany"),
};

module.exports = { AdvancesQuery: AdvancesQuery, AdvancesMutation: AdvancesMutation };