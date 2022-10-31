import express from "express";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";

// npm run devStart

const app = express();
const port = 3000;
app.use(bodyParser.json());





app.listen(port, () => console.log(`Works on port ${port}`));