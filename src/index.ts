import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import router from "./router";
import mongoose from "mongoose";
import express from "express";
//Initialize Express App
export const app = express();

//Use public folder to serve static files
app.use(express.static("public"));

//Express setup
app.use(
  cors({
    credentials: true,
  })
);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/api/test", (_, res) => res.json({ greeting: "Hello" }));

app.listen(8080, () => {
  console.log(process.env["PORT"]);
});

//MongoDB setup and initialization
const MONGO_URL =
  "mongodb+srv://caipora:zjiab8hr@cluster0.ivafpk8.mongodb.net/?retryWrites=true&w=majority";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));

//Router
app.use("/", router());
