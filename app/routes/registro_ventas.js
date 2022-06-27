const express = require('express')
const router = express.Router()

const registro_ventasService = require('../services/registro_ventas.services')
const service = new registro_ventasService()

router.get('/', async (req, res) => {

  const registro_ventas = await service.find()
  res.send(registro_ventas)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const registro_ventas = await service.findOne(id)

  res.json(registro_ventas)
})

router.post('/', async (req, res) => {
  const body = req.body
  const newcarrito = await service.create(body)
  res.status(200).json(newcarrito)
})

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const body = req.body
    const registro_ventas = await service.update(id, body)
    res.json(registro_ventas)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const rta = await service.delete(id)
  res.json(rta)
})
module.exports = router;