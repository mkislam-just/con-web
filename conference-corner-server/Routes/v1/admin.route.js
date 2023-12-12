const express = require('express');
const router = express.Router();
const adminController = require("../../controllers/admin.controller")

router.route("/").post(adminController.CreateAdminController);
router.route("/get-admin").post(adminController.GetAdminController);
router.route("/").get(adminController.GetAdminController);
router.route("/admin-list").get(adminController.GetAdminListController);
router.route("/admin-list/:email").delete(adminController.removeAdminByEmailController);
router.route("/home-content").post(adminController.HomePageContentController);
module.exports = router;