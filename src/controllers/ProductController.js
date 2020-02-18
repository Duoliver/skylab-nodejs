const mongoose = require('mongoose')
const requireDir = require('require-dir')
requireDir('../models')

const Product = mongoose.model('Product')

module.exports = {
    async index(req, res) {
        const products = await Product.find()

        return res.json(products)
    },

    async store(req, res) {
        const product = await Product.create(req.body)

        return res.json(product)
    }
}