import Joi from "joi";

export const validateStudentDetailDTO = Joi.object().keys({
    FirstName:Joi.string().required(),
    LastName:Joi.string().required(),
    EmailID:Joi.string().required(),
    MobileNumber:Joi.number().required()
})




