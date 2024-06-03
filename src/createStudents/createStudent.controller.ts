import { addNewStudent } from "./createStudent.service";

const express = require ("express");

const createStudentRouter = express.Router();

createStudentRouter.route("/addNewStudent").post((req:any,res:any)=>addNewStudent(req,res) );

export default createStudentRouter;
