const Joi = require('joi');

const cod_envio = Joi.string().uuid();
const fecha  = Joi.number().integer().min(10);
const cuidad  = Joi.string().uuid();
const costo_vehiculo  = Joi.number().integer().min(10);
const nombre_cliente  = Joi.string().alphanum().min(5).max(10)
const direccion = Joi.string().uuid();
const telefono = Joi.number().integer().min(10);
const documentoIdentidad_cliente  = Joi.number().integer().min(10);
const placa_vehiculo = Joi.string().uuid();
const color  = Joi.string().uuid();
const marca_vehiculo  = Joi.string().uuid();
const lineas_vehiculos  = Joi.string().uuid();
const vin  = Joi.string().uuid();
const image = Joi.image();


const createRegistroSchema = Joi.object({
  nombre_cliente: nombre_cliente.required(),
  documentoIdentidad_cliente: documentoIdentidad_cliente.required(),
  costo_vehiculo: costo_vehiculo.required(),
  cuidad: cuidad.required(),
  fecha: fecha.required(),
  placa_vehiculo: placa_vehiculo.required(),
});

const updateRegistroSchema = Joi.object({
  nombre_cliente: nombre_cliente.required(),
  costo_vehiculo: costo_vehiculo.required(),
  direccion: direccion.required(),
  telefono: telefono.required(),
  color: color.required(),
  marca_vehiculo: marca_vehiculo.required(),
  vin: vin.required(),
  color: color.required(),
});

const getRegistroSchema = Joi.object({
  cod_envio: cod_envio.required(),
  lineas_vehiculos: lineas_vehiculos.required(),
  image: image.required(),
});

module.exports ={ createRegistroSchema,updateRegistroSchema,getRegistroSchema}


