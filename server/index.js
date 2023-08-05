import 'dotenv/config'

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
import session from "express-session";

// Microservice Routs
import Auth from "./API/Auth/index.js"
import Subsciber from "./API/Subscription/index.js"

// Database connection
import ConnectDB from "./database/connection.js";

const app = express();


// Session config
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'Session started'
  }));


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

// App Routes
app.use("/auth", Auth);
app.use("/subs", Subsciber);

  

app.get("/", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); 
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.json({ message: "Setup done" })
});

app.listen(3001, () => ConnectDB().then(() => console.log("Server is running")).catch((error)=>console.log(error, "Server is running, But database connection failed!")))