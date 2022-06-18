const Joi=require('joi');
const id=Joi.string().uuid();
const name=Joi.string().min(3).max(15);
const price=Joi.number().integer().min(10);
const description=Joi.string().min(3).max(15);
const categories=Joi.string().min(3).max(15);
const image=Joi.string().uri();

const createProductSchema=Joi.object({
    name:name.required(),
    price:price.required(),
    description:description.required(),
    categories:categories.required(),
    image:image.required(),
    });

const updateProductSchema=Joi.object({
        name:name,
        price:price,
        description:description,
        categories:categories,
        image:image,
        });

const getProductSchema=Joi.object({
                id:id.required(),
                });

module.exports={createProductSchema,updateProductSchema,getProductSchema}