const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const Product = require('./schema')
const app = express()

const URL = 'mongodb+srv://RustamovRR:jcczSIMWaXmibBL6@cluster0.trxte.mongodb.net/myFirstDatabase'

mongoose.connect(URL).then(() => console.log('bazaga ulandi'))

app.use(express.json())
app.use(cors())

app.get('/', async (req, res) => {
    const products = await Product.find()

    res.status(200).send({
        results: products
    })
})

app.post('/', async (req, res) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        data: product,
    });
})


const PORT = 8080
app.listen(PORT, () => {
    console.log('Port listening...')
})
