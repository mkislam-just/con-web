const adminModel = require("../models/makeAdmin.model")

exports.createAdminService = async ({ 'email': email }) => {
    const submitInfo = await adminModel.create({ 'email': email });
    console.log(submitInfo);
    return submitInfo;
};
exports.getAdminServices = async ({ 'email': email }) => {

    const submitInfo = await adminModel.find({ 'email': email });
    console.log(submitInfo);
    return submitInfo;
};