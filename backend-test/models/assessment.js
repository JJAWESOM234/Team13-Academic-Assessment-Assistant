const mongoose = require('mongoose')

const assessmentSchema = new mongoose.Schema({
    headerInfo:{
        type: Object
    },
    studentLearningOutcomes: {
        type: Object
    },
    assessmentMethods: {
        type: Object
    },
    dataCollection: {
        type: Object
    },
    decisionsAndActions: {
        type: Array
    },
    additionalInformation: {
        type: Object
    }
}) 

module.exports = mongoose.model('Assessment', assessmentSchema)