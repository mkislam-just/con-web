const 
    authorSubmitServices
 = require("../services/authorSubmit.services");

exports.CreateAuthorSubmitController = async (req, res, next) => {
    try {
        const fileURL = req.file.path
        const submitInformation = {...req.body, 'fileURL': fileURL};
        // console.log(req.file,submitInformation);
        const title = req.body.title;
        if(!title){
            return res.send({code: 400, massage: "Bad Request"})
        }
        console.log('submitInformation from controller',submitInformation);
        const registeredInfo = await authorSubmitServices.createAuthorSubmitServices(submitInformation);
        res.status(200).json({
            status: "success",
            message: "Submission completed successfully",
            data: registeredInfo
        })
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: "Can't Submitted Successfully",
            error: err,
            
        })
    }
};
exports.GetAuthorSubmitController = async (req, res, next) => {
    try {
        
        const registeredInfo = await authorSubmitServices.getAuthorSubmitServices();
        res.status(200).json({
            status: "success",
            message: "Submitted data get successfully",
            data: registeredInfo
        })
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: "Can't Submitted data get",
            error: err,
            
        })
    }
};