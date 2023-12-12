const authorSubmitModel = require("../models/authorSubmit.model")

exports.createAuthorSubmitServices = async (submitInformation) => {
    console.log('from AuthorServices',submitInformation);
    const submitInfo = await authorSubmitModel.create(submitInformation);
    return submitInfo;
};
exports.getAuthorSubmitServices = async (queries) => {
    console.log('from services getAuthorSubmitServices', queries);

    const submitInfo = await authorSubmitModel.find({})
    // .skip(queries.skip).limit(queries.limit)
    return submitInfo;
};