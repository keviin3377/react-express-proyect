//sell register route
const router = require('express').Router();
const sellregisterService = require('../services/sellregister.service');
const validatorHandler = require('../middlewares/validator.handler');

const {
    createSellregisterSchema,
    updateSellregisterSchema,
    getSellregisterSchema,
} = require('../schemas/sellregister.schema');

router.get('/', async (req, res) => {
    const sellregister = await sellregisterService.find();
    res.json(sellregister);
});

router.get('/:id', validatorHandler(getSellregisterSchema,'params'), async (req, res, next) => {
    try {
        const { id } = req.params;
        const sellregister = await sellregisterService.findOne(id);
        res.json(sellregister);
    } catch (error) {
        next(error);
    }
});

router.post('/',validatorHandler(createSellregisterSchema, 'body'), async (req, res) => {
    const body = req.body;
    const newSellregister = await sellregisterService.create(body);
    res.status(201).json(newSellregister);
});

router.patch('/:id',validatorHandler(getSellregisterSchema,'parmas'),validatorHandler(updateSellregisterSchema,'body'), async (req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const sellregister = await sellregisterService.update(id, body);
        res.json(sellregister);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const rta = await sellregisterService.delete(id);
    res.json(rta);
});

module.exports = router;