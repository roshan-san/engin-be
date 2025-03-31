import dotenv from 'dotenv';
import express from 'express';
import router from "./apiRoutes"
import cors from "cors"
dotenv.config();

const app = express();
const port = process.env.PORT || 4444;

app.use(express.json()); // For parsing JSON request bodies
//cors
app.use(cors(
  {
    origin: "*", // Allow requests from your Next.js frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    credentials: true, // Allow cookies and authentication headers
  }
));
app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});