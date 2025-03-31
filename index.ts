import dotenv from 'dotenv';
import express from 'express';
import router from "./apiRoutes"
import cors from "cors"
dotenv.config();

const app = express();
const port = 4444;

app.use(express.json());
app.use(cors(
  {
    origin: "*", 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
    credentials: true, 
  }
));
app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});