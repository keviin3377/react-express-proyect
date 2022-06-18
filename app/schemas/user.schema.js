const Joi=require('joi');
const id=Joi.string().uuid();
const name=Joi.string().min(3).max(15);
const address=Joi.string().min(3).max(15);
const phone=Joi.string().min(3).max(15);
const email=Joi.string().min(3).max(15);
const password=Joi.string().min(3).max(15);
const nickname=Joi.string().min(3).max(15);
const avatar=Joi.string().min(3).max(15);

const createUserSchema=Joi.object({
    name:name.required(),
    address:address.required(),
    phone:phone.required(),
    email:email.required(),
    password:password.required(),
    nickname:nickname.required(),
    avatar:avatar.required(),
    });

const updateUserSchema=Joi.object({
        name:name,
        address:address,
        phone:phone,
        email:email,
        password:password,
        nickname:nickname,
        avatar:avatar,
        });

const getUserSchema=Joi.object({
            id:id.required(),
            });

module.exports={createUserSchema,updateUserSchema,getUserSchema}
