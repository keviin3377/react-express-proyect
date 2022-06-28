const Joi = require('joi');

const idSchema = Joi.string().required();
const nameSchema = Joi.string().required();
const dniSchema = Joi.number().required();
const phoneSchema = Joi.number().required();
const priceSchema = Joi.number().required();
const ivaSchema = Joi.number().required();
const totalSchema = Joi.number().required();
const productNameSchema = Joi.string().required();
const descriptionSchema = Joi.string().required();
const categoriesSchema = Joi.array().items(Joi.string()).required();
const imageSchema = Joi.string().required();
const sendDateSchema = Joi.date().required();
const sendcodeSchema = Joi.number().required();
const citySchema = Joi.string().required();
//-----------------------------------------------------
const tipo_vehiculoSchema = Joi.string().required();
const marca_vehiculoSchema = Joi.string().required();
const modelo_vehiculoSchema = Joi.string().required();
const color_vehiculoSchema = Joi.string().required();
const placa_vehiculoSchema = Joi.string().required();
const anio_vehiculoSchema = Joi.string().required();
const vin_vehiculoSchema = Joi.string().required();
const motor_vehiculoSchema = Joi.string().required();
//-----------------------------------------------------
const createSellregisterSchema = Joi.object({
    id: idSchema.required(),
    name: nameSchema.required(),
    dni: dniSchema.required(),
    phone: phoneSchema.required(),
    price: priceSchema.required(),
    iva: ivaSchema.required(),
    total: totalSchema.required(),
    productName: productNameSchema.required(),
    description: descriptionSchema.required(),
    categories: categoriesSchema.required(),
    image: imageSchema.required(),
    sendDate: sendDateSchema.required(),
    sendcode: sendcodeSchema.required(),
    city: citySchema.required(),
    //-----------------------------------------------------
    tipo_vehiculo: tipo_vehiculoSchema.required(),
    marca_vehiculo: marca_vehiculoSchema.required(),
    modelo_vehiculo: modelo_vehiculoSchema.required(),
    color_vehiculo: color_vehiculoSchema.required(),
    placa_vehiculo: placa_vehiculoSchema.required(),
    anio_vehiculo: anio_vehiculoSchema.required(),
    vin_vehiculo: vin_vehiculoSchema.required(),
    motor_vehiculo: motor_vehiculoSchema.required(),
    //-----------------------------------------------------
});

const updateSellregisterSchema = Joi.object({
    id: idSchema,
    name: nameSchema,
    dni: dniSchema,
    phone: phoneSchema,
    price: priceSchema,
    iva: ivaSchema,
    total: totalSchema,
    productName: productNameSchema,
    description: descriptionSchema,
    categories: categoriesSchema,
    image: imageSchema,
    sendDate: sendDateSchema,
    sendcode: sendcodeSchema,
    city: citySchema,
    //-----------------------------------------------------
    tipo_vehiculo: tipo_vehiculoSchema,
    marca_vehiculo: marca_vehiculoSchema,
    modelo_vehiculo: modelo_vehiculoSchema,
    color_vehiculo: color_vehiculoSchema,
    placa_vehiculo: placa_vehiculoSchema,
    anio_vehiculo: anio_vehiculoSchema,
    vin_vehiculo: vin_vehiculoSchema,
    motor_vehiculo: motor_vehiculoSchema,
    //-----------------------------------------------------
});

const getSellregisterSchema = Joi.object({
    id: idSchema.required(),
});

const getSellregistersSchema = Joi.object({
    page: Joi.number().required(),
    limit: Joi.number().required(),
});

module .exports = { createSellregisterSchema, updateSellregisterSchema, getSellregisterSchema, getSellregistersSchema }; 

