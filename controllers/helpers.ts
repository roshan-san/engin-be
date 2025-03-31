import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getUserIdByEmail(email:any) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
      },
    });

    if (user) {
      return user.id;
    } else {
      return null; 
    }
  } catch (error) {
    console.error('Error fetching user ID by email:', error);
    return null;
  }
}


export {getUserIdByEmail};

