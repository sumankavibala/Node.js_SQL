import { Request, Response } from "express";
import Joi from "joi";
import { AppDataSource } from "../core/db";
import { StudentDetails } from "../createStudents/createStudent.model";

export const delStudent = async(req: Request, res: Response) => {
  try {
    console.log(req.body, "test");
    const payload = req.params.ID;
    const studentDetailRepo = AppDataSource.getRepository(StudentDetails);
    const studentDetailList= await studentDetailRepo
      .createQueryBuilder()
      .delete()
      .from(StudentDetails)
      .where("ID=:ID", { ID: payload })
      .execute();
    res.status(200).send({
      Result: "student deleted successfully",
    });
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};
