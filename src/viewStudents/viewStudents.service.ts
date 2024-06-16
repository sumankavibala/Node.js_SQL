import { Request, Response } from "express";
import Joi from "joi";
import { validateStudentDetailDTO } from "../viewStudents/viewStudents.dto";
import { AppDataSource } from "../core/db";
import { StudentDetails } from "../createStudents/createStudent.model";

export const viewStudent = async (req: Request, res: Response) => {
  try {
      const payload = req.params.id;
      console.log(req.params.id, "test",payload);
    if(!payload) throw new Error('invalid id');
    // const validationResponse = validateStudentDetailDTO.validate(payload);
    // console.log(
    //   validationResponse?.error?.details[0].message,
    //   "any error by suman"
    // );
    // if (validationResponse.error?.details) {
    //   throw new Error(validationResponse.error.details[0].message);
    // }

    const studentDetailRepo = AppDataSource.getRepository(StudentDetails)

    const studentDetailList = await studentDetailRepo
    .createQueryBuilder("StudentDetails")
    .where("StudentDetails.ID=:ID",{ID:payload})
    .getOne();
    console.log(studentDetailList);
    res.status(200).send({
        result: studentDetailList,
    });
  } catch (error: any) {
    console.log(error, "i");

    res.status(400).send({
      Result: error.message,
    });
  }
};
 