import express from "express";
import cors from 'cors'
import RouterApi from "./domains/routes/index.js";
import dotenv from 'dotenv';
import connectDataBase from "./domains/infrastructure/sequelize.js";

dotenv.config()

export const app = express();

app.use(cors());
app.use(express.json());

RouterApi(app);

const port = process.env.NODE_PORT_APLICATION || 8520;

const startServer = async () => {
   await connectDataBase()
   app.listen(port, () => {
      console.log(`Server is running on port http://localhost:${port}`);
   });

   app.get('/', (req, res) => {
      res.send('<h1>This server Run 🚀</h1>');
   })

};



startServer();



