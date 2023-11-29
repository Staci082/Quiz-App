import express from 'express';
import cors from 'cors';
import 'dotenv/config'

import ConnectDB from "./src/config/db.js";
import { quizRouter } from './src/routes/quiz.js';

const app = express();
const port = 5000;


ConnectDB();

app.use(express.json());
app.use(cors());
app.use("/", quizRouter);


app.listen(port, () => {
    console.log(`App is running on ${port}`);
});