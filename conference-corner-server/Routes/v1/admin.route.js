const express = require('express');
const router = express.Router();
const adminController = require("../../controllers/admin.controller")

router.route("/").post(adminController.CreateAdminController);
router.route("/get-admin").post(adminController.GetAdminController);
router.route("/").get(adminController.GetAdminController);

module.exports = router;