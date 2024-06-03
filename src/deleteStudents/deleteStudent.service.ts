import { Request, Response } from "express";

export const delStudent = (req:Request, res:Response)=>{
    try {
        res.status(200).send({
            Result:"student deleted successfully"
        })
    } catch (error) {
        throw new Error (JSON.stringify(error))
    }
}