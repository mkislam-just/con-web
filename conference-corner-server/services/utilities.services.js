const HomePageMassage = require("../models/HomePageContentModel");
const Dates = require("../models/ConferenceDate.model");


exports.getHomePageContentService = async () => {
    const submitInfo = await HomePageMassage.find({});
    console.log("HomePage Massage",submitInfo);
    return submitInfo;
};
exports.getDatesService = async () => {
    const submitInfo = await Dates.find({});
    console.log("Dates From Utilities getDatesService",submitInfo);
    return submitInfo;
};