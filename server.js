const express = require('express')
const mongoose = require('mongoose')
const routes = require('./src/routes')

const app = express()

//permitir envio de dados em JSON
app.use(express.json())

mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { 
        useUnifiedTopology: true,
        useNewUrlParser: true 
    }
)

    

app.use('/api', routes)

app.listen(3001)