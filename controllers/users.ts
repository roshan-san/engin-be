import { PrismaClient, User } from '@prisma/client'
import { Request, Response } from 'express'
import { userSchema } from '../zodSchemas';
import { z } from 'zod';
const prisma = new PrismaClient()

//create user working properly
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
    const userData = (req.body);
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
  const limit = parseInt(req.query._limit as string) || 10;
  const searchQuery = req.query.q as string;

  try {
    let whereClause = {};

    if (searchQuery) {
      whereClause = {
        OR: [
          { email: { contains: searchQuery, mode: 'insensitive' } },
          { peru: { contains: searchQuery, mode: 'insensitive' } },
          { username: { contains: searchQuery, mode: 'insensitive' } },
          { bio: { contains: searchQuery, mode: 'insensitive' } },
          { type: { contains: searchQuery, mode: 'insensitive' } },
          { skills: { has: searchQuery } },
          { areasofinterest: { has: searchQuery } },
          { availableFor: { contains: searchQuery, mode: 'insensitive' } },
          { location: { contains: searchQuery, mode: 'insensitive' } },
          { linkedin: { contains: searchQuery, mode: 'insensitive' } },
          { github: { contains: searchQuery, mode: 'insensitive' } },
        ],
      };
    }

    const users = await prisma.user.findMany({
      where: whereClause,
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
  
  try {
    const user = await prisma.user.findUnique({
      where: { email: typeof email === 'string' ? email : undefined },
      include:{
        receivedConnections:{
          include:{
            sender:true
          }
        },
        startups:true,
        collaborations:true,
        experiences:true,
      }
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


const userall=async (req:Request, res:Response) => {
  try {
    const userId = parseInt(req.params.id);

    // Fetch user data with relationships
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        startups: true,
        
        collaborations: {
          include: {
            startup: true,
            role: true,
          },
        
        },
        sentConnections:{
            include:{
              receiver:true,
              sender:true
            }
        },
        receivedConnections:{
          include:{
            receiver:true,
            sender:true
          }
        }
        
      },
    });

    if (!user) {
       res.status(404).json({ error: 'User not found' });
    }

    // Fetch user connections (limit 6)
    const connections = await prisma.user.findMany({
      where: {
        receivedConnections: {
          some: {
            senderId: userId
          }
        }
      },
      take: 6
    });

    res.json({ user, connections });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


export default {createUser,updateUser,checkUser,users,getUser,userall};