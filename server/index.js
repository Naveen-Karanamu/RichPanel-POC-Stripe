import 'dotenv/config'

// Libraries
import express from "express";
import session from "express-session";

// Microservice Routs
import Auth from "./API/Auth/index.js"

// Database connection
import ConnectDB from "./database/connection.js";

const app = express();


// Middlewares
app.use(express.json());

// App Routes
app.use("/auth", Auth);

// Session config
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'Session started'
  }));
  

app.get("/", (req, res) => res.json({ message: "Setup done" }));

app.listen(3001, () => ConnectDB().then(() => console.log("Server is running")).catch((error)=>console.log(error, "Server is running, But database connection failed!")))