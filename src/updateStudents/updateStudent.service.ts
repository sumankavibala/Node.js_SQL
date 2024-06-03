import { Request, Response } from "express";

export const updateExistingStudents = (req:Request,res:Response)=>{
    try {
        res.status(200).send({
            Result: "student update successfully"
        })
    } catch (error) {
        throw new Error (JSON.stringify(error))
    }
}

