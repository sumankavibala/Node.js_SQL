import { viewStudent } from "./viewStudents.service";

const express = require("express");

const getStudentRouter = express.Router();

getStudentRouter.route("/viewStudent").post((req:any,res:any)=>viewStudent(req,res));

getStudentRouter.route("/viewStudent/:id").get((req:any,res:any)=>viewStudent(req,res));

export default getStudentRouter;