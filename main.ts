import "reflect-metadata" ;

import createStudentRouter from "./src/createStudents/createStudent.controller";
import deleteStudentRouter from "./src/deleteStudents/deleteStudent.controller";
import updateStudentRouter from "./src/updateStudents/updateStudent.controller";
import "../Node.js_project_1/src/core/db";
import { viewStudent } from "./src/viewStudents/viewStudents.service";
import getStudentRouter from "./src/viewStudents/viewStudents.controller";

const express = require('express');

const dotenv=require('dotenv');


dotenv.config();


const app = express();

const port = process.env.PORT;

app.use(express.json());

app.listen (port, () =>{
    console.log("running succesfully " + port );
});

app.use("/Student", createStudentRouter);

app.use("/studentdel", deleteStudentRouter);

app.use("/studentUpdate", updateStudentRouter);

app.use("/getStudent", getStudentRouter);