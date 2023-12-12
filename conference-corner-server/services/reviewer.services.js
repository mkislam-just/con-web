const ReviewersList = require("../models/reviewerlist.model")
const RequestedReviewers = require("../models/requestedReviewers.model")

exports.createReviewerService = async (info) => {
    console.log('reviewerInfo from services',info);
    const submitInfo = await reviewerModel.create(info);
    
    return submitInfo;
};
exports.createSelectedReviewerService = async (info) => {
    console.log('reviewerInfo from services',info);
    const submitInfo = await ReviewersList.create(info);
    return submitInfo;
};
exports.deleteSelectedReviewerService = async (email) => {
    const submitInfo = await ReviewersList.deleteOne({"email" : email});
    console.log('from review services deleteReviewerByIdService- DeleteInfo ---',submitInfo);
    return submitInfo;
};
exports.getRequestedReviewersListServices = async () => {

    const submitInfo = await RequestedReviewers.find({});
    console.log('from review services getReviewerServices',submitInfo);
    return submitInfo;
};
exports.getAllReviewersListServices = async () => {

    const submitInfo = await ReviewersList.find({});
    console.log('from review services getReviewerServices',submitInfo);
    return submitInfo;
};
exports.getReviewerServices = async ({ 'email': email }) => {
    const submitInfo = await ReviewersList.find({ 'email': email });
    console.log('from review services getReviewerServices',submitInfo);
    return submitInfo;
};
exports.deleteReviewerByIdService = async (email) => {
    console.log('from review services deleteReviewerByIdService-----',{"email" : email});
    const submitInfo = await RequestedReviewers.deleteOne({"email" : email});
    console.log('from review services deleteReviewerByIdService- DeleteInfo ---',submitInfo);
    return submitInfo;
};