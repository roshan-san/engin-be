import { Request, Response } from 'express';
import { PrismaClient, Startup } from '@prisma/client';
import { z } from 'zod';
import {getUserIdByEmail} from "./helpers"

const prisma = new PrismaClient();

const createStartup = async (req: Request, res: Response) => {
  try {
    const startupData = (req.body);
    const email = req.query.email
    console.log(email);
    const founderId=await getUserIdByEmail(email)
    console.log(founderId);
    
    const newStartup = await prisma.startup.create({
      data: {
        ...startupData,
        founderId:founderId
      },
      
    });

    res.status(201).json(newStartup);
  } catch (error: any) {
    
    console.error('Error creating startup:', error);

    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.errors });
    }

    if (error.code === 'P2002') {
      res.status(409).json({ error: 'startup already exists.' });
    }

    res.status(500).json({ error: 'Internal server error.' });
  }
};
export default { createStartup };