import { updateExistingStudents } from "./updateStudent.service";

const express = require("express");

const updateStudentRouter = express.Router();

updateStudentRouter.route("/").put((req:any,res:any)=>updateExistingStudents(req,res));

export default updateStudentRouter;
