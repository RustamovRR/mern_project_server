const express = require('express')
const router = require("express").Router();
const Product = require('./schema');

router.get('/', async (req, res) => {
    const products = await Product.find()

    res.status(200).send({
        results: products
    })
})

module.exports = router