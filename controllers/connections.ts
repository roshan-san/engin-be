import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

import { Request, Response } from 'express';
const getConnections = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    console.log('userId:', userId);
    

    const connections = await prisma.connection.findMany({
      where: {
        OR: [
          { senderId: parseInt(userId) },
          { receiverId: parseInt(userId) },
        ],
        status: 'accepted',
      },
      include: {
        sender: true,
      },
    });

    res.status(200).json(connections);
  } catch (error) {
    console.error('Error getting connections:', error);
    res.status(500).json({ error: 'Failed to get connections' });
  }
};

const sendConnection = async (req:Request, res:Response) => {
  try {
    const { senderId, receiverId } = req.body;

    const connection = await prisma.connection.create({
      data: {
        senderId,
        receiverId,
      },
    });

    res.status(201).json(connection);
  } catch (error) {
    console.error('Error sending connection request:', error);
    res.status(500).json({ error: 'Failed to send connection request' });
  }
};

const acceptConnection = async (req:Request, res:Response) => {
  try {
    const { connectionId } = req.body;

    const updatedConnection = await prisma.connection.update({
      where: {
        id: parseInt(connectionId),
      },
      data: {
        status: 'accepted',
      },
    });

    res.status(200).json(updatedConnection);
  } catch (error) {
    console.error('Error accepting connection request:', error);
    res.status(500).json({ error: 'Failed to accept connection request' });
  }
};
export default {acceptConnection, getConnections, sendConnection}; 