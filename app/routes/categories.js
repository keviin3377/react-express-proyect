const express = require('express')
const router = express.Router()

const CategoriesService = require('../services/categories.service')
const service = CategoriesService

router.get('/:categoryId/products/:productId',(req,res)=>{
  const categories = service.find()
  res.json(categories)
})

module.exports = router
