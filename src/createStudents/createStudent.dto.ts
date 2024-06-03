import Joi from "joi";

export const validateStudentDetail = Joi.object().keys({
    name:Joi.string().required(),
    age:Joi.number().required()
})