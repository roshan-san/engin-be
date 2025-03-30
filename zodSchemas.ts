import { z } from "zod";
const userSchema = z.object({
    email: z.string().email(),
    avatar: z.string(),
    peru: z.string(),  
    username: z.string(),
    bio: z.string(), 
    type: z.string(),
    skills: z.string().array(),
    areasofinterest: z.string().array(),
    availableFor: z.string(), 
    location: z.string(), 
    linkedin: z.string().nullable(), 
    github: z.string().nullable(), 
  });
const startupSchema = z.object({
    name: z.string(),
    description: z.string(),
    problem: z.string(),
    solution: z.string(),
    industry: z.string(),
    location: z.string(),
    teamSize: z.number(),
    patent: z.string(),
    funding: z.number(),
    founderId: z.number(),
    });
export { userSchema, startupSchema };