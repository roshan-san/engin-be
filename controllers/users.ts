import { PrismaClient, User } from '@prisma/client'
import { Request, Response } from 'express'
import { userSchema } from '../zodSchemas';
import { z } from 'zod';
const prisma = new PrismaClient()


const createUser = async (req: Request, res: Response) => {
  try {
    const userData = userSchema.parse(req.body);
    const newUser = await prisma.user.create({
      data: userData,
    });

    res.status(201).json(newUser);
  } catch (error: any) {
    
    console.error('Error creating user:', error);

    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.errors });
    }

    if (error.code === 'P2002') {
      res.status(409).json({ error: 'Email or username already exists.' });
    }

    res.status(500).json({ error: 'Internal server error.' });
  }
};

//check user exists:
const checkUser = async (req: Request, res: Response) => {
  try {
    const {email} = req.body
    const user = await prisma.user.findUnique({
      where: { email: email }
    })

    if (user) {
      res.status(200).json({ exists: true })
    } else {
      res.status(200).json({ exists: false })
    }
    
  } catch (error) {
    res.status(500).json({ error: 'Failed to check user', details: error })
    
  }
}
const updateUser = async (req: Request, res: Response) => {
  try {
    const userData = userSchema.parse(req.body);
    const newUser = await prisma.user.update({
      where: { email: userData.email },
      data: userData,
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user', details: error })
  }
}
const users = async (req: Request, res: Response) => {
    const page = parseInt(req.query._page as string) || 1;
    const limit = parseInt(req.query._limit as string) || 20;
  
    try {
      const users = await prisma.user.findMany({
        skip: (page - 1) * limit,
        take: limit,
      });
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
const getUser = async (req: Request, res: Response) => {
  const email = req.query.email;
  console.log(email);
  
  try {
    const user = await prisma.user.findUnique({
      where: { email: typeof email === 'string' ? email : undefined }
    })

    if (user) {
      res.status(200).json(user)
    } else {
      
      res.status(404).json({ error: 'User not found' })
    }
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch user', details: error })
    
  }
}
export default {createUser,updateUser,checkUser,users,getUser};