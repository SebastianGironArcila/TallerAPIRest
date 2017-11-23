'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
	name: String,
	price: Number,
	category: { type: String , "default" : []},
	description: String,
	available: Boolean

})


module.exports = mongoose.model('Product', ProductSchema)
