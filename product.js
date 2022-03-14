const express = require('express')
const router = require("express").Router();
const Product = require('./schema');

router.get('/', async (req, res) => {
    const products = await Product.find()

    res.status(200).send({
        results: products
    })
})

router.post('/', async (req, res) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        data: product,
    });
})

router.delete('/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)

    res.json({
        success: true,
        data: 'malumot ochirildi',
    });
})

module.exports = router