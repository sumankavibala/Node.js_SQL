import Joi from "joi";

export const validateStudentDetailDTO = Joi.object().keys({
    ID:Joi.number().required()
    // FirstName:Joi.string().required(),
    // LastName:Joi.string().required(),
    // EmailID:Joi.string().required(),
    // MobileNumber:Joi.number().required()
}).unknown(true);

