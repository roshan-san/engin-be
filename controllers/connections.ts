import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

import { Request, Response } from 'express';

const sendConnection = async (req:Request, res:Response) => {
  try {
    const { senderId, receiverId } = req.body;

    const connection = await prisma.connection.create({
      data: {
          senderId,
          receiverId,
          status: "pending"
      }
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
export default {acceptConnection, sendConnection}; 