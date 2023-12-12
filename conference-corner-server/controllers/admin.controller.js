const 
    adminServices
 = require("../services/admin.services");

exports.CreateAdminController = async (req, res, next) => {
    try {
        const email =req.body.email;
        console.log(req.body);
        if(!email){
            return res.send({code: 400, massage: "Bad Request"})
        }
        const registeredInfo = await adminServices.createAdminService({'email': email});
        res.status(200).json({
            status: "success",
            message: "Admin is added successfully",
            data: registeredInfo
        })
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: "Admin Couldn't added Successfully",
            error: err,
            
        })
    }
};

exports.GetAdminController = async (req, res, next) => {
    try {
        const email =req.body.email;
        const adminList = await adminServices.getAdminServices({'email' : email});
        res.status(200).json({
            status: "success",
            message: "Admin List get successfully",
            data: adminList
        })
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: "Can't get Admin List",
            error: err,
            
        })
    }
};
exports.GetAdminListController = async (req, res, next) => {
    try {
        const adminList = await adminServices.getAdminListServices();
        res.status(200).json({
            status: "success",
            message: "Admin List get successfully",
            data: adminList
        })
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: "Can't get Admin List",
            error: err,
            
        })
    }
};
exports.removeAdminByEmailController = async (req, res, next) => {
    try {
        const {email} = req.params
        console.log("removing admin by email: ",email); 
        const reviewerList = await adminServices.removeAdminByEmailService(email);
        res.status(200).json({
            status: "success",
            message: "Reviewer Deleted successesFully",
            data: reviewerList
        })
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: "Can't get Reviewer List",
            error: err,
            
        })
    }
};
exports.HomePageContentController = async (req, res, next) => {
    try {
        const content =req.body.homePageMassage;
        console.log("Content",content);
        if(!content){
            return res.send({code: 400, massage: "Bad Request"})
        }
        const registeredInfo = await adminServices.HomePageContentCreatingService({'content': content});
        res.status(200).json({
            status: "success",
            message: "Admin is added successfully",
            data: registeredInfo
        })
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: "Admin Couldn't added Successfully",
            error: err,
            
        })
    }
};