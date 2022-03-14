const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const app = express()
const productRouter = require('./product')

const URL = 'mongodb+srv://RustamovRR:jcczSIMWaXmibBL6@cluster0.trxte.mongodb.net/myFirstDatabase'

mongoose.connect(URL).then(() => console.log('bazaga ulandi'))

app.use(express.json())
app.use(cors())
app.use('/', productRouter)

const PORT = 8080
app.listen(PORT, () => {
    console.log('Port listening...')
})
