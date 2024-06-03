import createStudentRouter from "./src/createStudents/createStudent.controller";
import deleteStudentRouter from "./src/deleteStudents/deleteStudent.controller";
import updateStudentRouter from "./src/updateStudents/updateStudent.controller";

const express = require('express');

const dotenv=require('dotenv');


dotenv.config();


const app = express();

const port = process.env.PORT;

app.use(express.json());

app.listen (port, () =>{
    console.log("running succesfully " + port );
});

app.use("/teacher", createStudentRouter);

// app.use("/teacher/del", deleteStudentRouter);

// app.use("/teacher/upd", updateStudentRouter);