import express from "express";
import cors from "cors";
import UserRoute from "./route/UserRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5500, () => console.log('Server running on port 5500'));