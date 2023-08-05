import 'dotenv/config'

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
import session from "express-session";

// Microservice Routs
import Auth from "./API/Auth/index.js"

// Database connection
import ConnectDB from "./database/connection.js";

const app = express();


// Session config
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'Session started'
  }));

  // Allow requests from specific origins
const allowedOrigins = ['https://naveen-poc-stripe.vercel.app/', 'http://localhost:3000'];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
// app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

// App Routes
app.use("/auth", Auth);

  

app.get("/", (req, res) => res.json({ message: "Setup done" }));

app.listen(3001, () => ConnectDB().then(() => console.log("Server is running")).catch((error)=>console.log(error, "Server is running, But database connection failed!")))