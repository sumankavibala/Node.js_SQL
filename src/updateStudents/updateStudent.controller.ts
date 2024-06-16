import { updateExistingStudent } from "./updateStudent.service";

const express = require("express");

const updateStudentRouter = express.Router();

updateStudentRouter.route("/updateExistingStudent").post((req:any,res:any)=>updateExistingStudent(req,res));

export default updateStudentRouter;
