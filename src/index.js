import express from "express";
const app = express();
import { route } from "./route/index.js";
import bodyParser from "body-parser";
import "dotenv/config";
import cors from "cors";
app.use(cors());

const PORT = process.env.PORT || 3003;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

route(app);

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
