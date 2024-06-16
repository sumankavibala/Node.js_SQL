import {Request, Response} from "express";
import Joi from "joi";
import { validateStudentDetailDTO } from "./updateStudent.dto";
import { AppDataSource } from "../core/db";
import { StudentDetails } from "../createStudents/createStudent.model";

export const updateExistingStudent = async (req:Request, res:Response)=>{
    try {
        console.log(req.body,"test");
        const payload=req.body;
        const validateResponse = validateStudentDetailDTO.validate(payload);
        console.log(
            validateResponse?.error?.details[0].message,
            "any erro by suman"
        );
        if (validateResponse.error?.details){
            throw new Error(validateResponse.error.details[0].message);
        }
        const studentDetailRepo = AppDataSource.getRepository(StudentDetails);
        await studentDetailRepo.createQueryBuilder().update(StudentDetails).set({
            FirstName:payload.FirstName,
            LastName:payload.LastName,
            EmailID:payload.EmailID,
            MobileNumber:payload.MobileNumber}).where("ID=:ID",{ID:payload.ID}).execute()
        res.status(200).send({
            result:"student updated successfully"
        });
    } catch (error:any) {
        console.log(error);
        res.status(400).send({
            result:error.message
        });
        
    }
};
