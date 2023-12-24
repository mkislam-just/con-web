const mongoose = require('mongoose');


const ConferenceDatesSchema = mongoose.Schema({

    PaperSubmissionDeadline: {
        type: 'String',
        required: [true, "Please provide a Paper Submission Deadline Date"],
    },
    AcceptanceNotification: {
        type: 'String',
        required: [true, "Please provide Acceptance Notification Date"],
    },
    CameraReadySubmission: {
        type: 'String',
        required: [true, "Please provide Camera Ready Submission Date"],
    },
    RegistrationDeadline: {
        type: 'String',
        required: [true, "Please provide Registration Deadline Date"],
    },
    ConferenceDate: {
        type: 'String',
        required: [true, "Please provide Conference Date"],
    }

},{
    timestamps: true
})
const Dates = mongoose.model('Dates', ConferenceDatesSchema);

module.exports = Dates;