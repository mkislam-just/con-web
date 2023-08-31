const authorSubmitModel = require("../models/authorSubmit.model")

exports.createAuthorSubmitServices = async (submitInformation) => {
    console.log('from AuthorServices',submitInformation);
    const submitInfo = await authorSubmitModel.create(submitInformation);
    return submitInfo;
};
exports.getAuthorSubmitServices = async () => {
    const submitInfo = await authorSubmitModel.find({});
    console.log(submitInfo);
    return submitInfo;
};