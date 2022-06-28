const joi = require('joi');

const id = joi.string().uuid();
const Category = joi.string().required();

const createCategorySchema = joi.object({
    id: id.required(),
    Category: Category.required(),
});

const updateCategorySchema = joi.object({
    id: id,
    Category: Category,
});

const deleteCategorySchema = joi.object({
    id: id.required(),
});

module.exports = { createCategorySchema, updateCategorySchema, deleteCategorySchema };