import { delStudent } from "./deleteStudent.service";

const express = require ("express");

const deleteStudentRouter = express.Router();

deleteStudentRouter.route("/deleteStudent/:ID").delete((req:any,res:any)=> delStudent(req,res));

export default deleteStudentRouter;
