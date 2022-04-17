import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv';
import routes from './route.js'
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use('/api', routes);

mongoose.connect(process.env.MONGOURI);
mongoose.connection.on("connected", () => {
  console.log("connected to mongodb");
});
mongoose.connection.on("error", (err) => {
  console.log("error while connectin to mongodb", err);
});

app.listen(PORT, () => {
  console.log("server is running on", PORT);
});
