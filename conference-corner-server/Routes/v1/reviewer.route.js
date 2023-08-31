const express = require('express');
const router = express.Router();
const reviewerController = require("../../controllers/reviewer.controller")

router.route("/").post(reviewerController.CreateReviewerController);
router.route("/get-reviewer").post(reviewerController.GetReviewerController);
router.route("/selected-reviewer").post(reviewerController.CreateSelectedReviewerController);
router.route("/").get(reviewerController.GetRequestedReviewersController);
router.route("/:email").delete(reviewerController.deleteReviewerByIdController);

module.exports = router;