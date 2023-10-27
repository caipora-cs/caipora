//Initialize Express App
const app = require("express")();
const http = require("http").createServer(app);
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const cors = require("cors");
const router = require("./router/index.ts");
const mongoose = require("mongoose");


//Express setup
app.use(
  cors({
    credentials: true,
  })
);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:5173'
}))

//Express server
const server = http.createServer(app);

server.listen(8080, () => {
  console.log("Server running on http://localhost:8080/");
});

//MongoDB setup and initialization
const MONGO_URL =
  "mongodb+srv://caipora:zjiab8hr@cluster0.ivafpk8.mongodb.net/?retryWrites=true&w=majority";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error) => console.log(error));

//Router
app.use("/", router());
