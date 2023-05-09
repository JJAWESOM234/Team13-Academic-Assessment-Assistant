const express = require('express')
const router = express.Router()
const Assessment = require('../models/assessment')

module.exports = router

//Get All Assessment Reports
router.get('/', async (req, res) => {
    try{
        const ass = await Assessment.find()
        res.json(ass)
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
})

//Posting One Assessment Report
router.post('/', async(req, res) => {
    console.log(req.body)
    const ass = new Assessment({
        headerInfo: req.body.headerInfo,
        studentLearningOutcomes: req.body.studentLearningOutcomes,
        assessmentMethods: req.body.assessmentMethods,
        dataCollection: req.body.dataCollection,
        decisionsAndActions: req.body.decisionsAndActions,
        additionalInformation: req.body.additionalInformation
    })
    try{
        const newAssessment = await ass.save()
        res.status(201).json(newAssessment)
        console.log("Report Saved.")
    } catch (err) {
        res.status(400).json({message: err.message})
        console.log("Error saving report")
    }
})