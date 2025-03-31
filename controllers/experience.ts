import { PrismaClient } from "@prisma/client"
import { Request, Response } from 'express';


const prisma = new PrismaClient
const addexp=async (req:Request,res:Response) => {
    try {
        const expdata= req.body
        const exp = await prisma.userExperience.create({
            data:expdata
        })
        res.send(exp)
    } catch (error) {
        res.status(500)
    }
}
export default {addexp}