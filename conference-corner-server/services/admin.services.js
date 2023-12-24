const HomePageMassage = require("../models/HomePageContentModel");
const adminModel = require("../models/makeAdmin.model");
const Dates = require("../models/ConferenceDate.model");

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
exports.getAdminListServices = async () => {

    const submitInfo = await adminModel.find({});
    console.log(submitInfo);
    return submitInfo;
};
exports.removeAdminByEmailService = async (email) => {
    console.log('from admin services removeAdminByEmailService-----',{"email" : email});
    const submitInfo = await adminModel.deleteOne({"email" : email});
    console.log('from admin services removeAdminByEmailService- DeleteInfo ---',submitInfo);
    return submitInfo;
};
exports.HomePageContentService = async ({ 'content': content }) => {
    const submitInfo = await HomePageMassage.updateOne({}, {$set:{ 'content': content }});
    console.log("HomePage Massage",submitInfo);
    return submitInfo;
};
exports.updateDateService = async (dateInfo) => {
    const submitInfo = await Dates.updateOne({}, {$set: dateInfo});
    console.log("Date Services",submitInfo);
    return submitInfo;
};