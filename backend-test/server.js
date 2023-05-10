const express = require('express')
var cors = require('cors')
const mongoose = require('mongoose')
const app = express()
app.use(cors())
const port = 4000

mongoose.connect('mongodb://localhost/assessments')
const db = mongoose.connection
db.on('error', (error)=> console.error(error))
db.once('open', ()=> console.log('Database connected.'))

app.use(express.json())

const assessmentsRouter = require('./routes/assessments')
app.use('/assessments', assessmentsRouter)
app.listen(port, ()=> console.log('Server is running.'))