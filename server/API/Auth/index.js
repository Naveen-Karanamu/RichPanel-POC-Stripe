//Libraries
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

// Models
import { UserModel } from "../../database/user/index.js";

// Validations
import { validateSignUp, validateSignIn } from "../../Validations/auth.js";

const Router = express.Router();

/*
Route: /signup
Description: Signup with email / Phone number and password
params: NONE
Access: Public
Method: POST
*/
Router.post("/signup", async (req, res) => {
    try {
        await validateSignUp(req.body.credentials);

        await UserModel.findByEmail(req.body.credentials);

        const newUser = await UserModel.create(req.body.credentials);

        const token = newUser.generateJWT();

        return (res.status(200).json({ token, status: "Success" }));

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/*
Route: /signin
Description: Signin with email & password
params: NONE
Access: Public
Method: POST
*/
Router.post("/signin", async (req, res) => {
    try {
        await validateSignIn(req.body.credentials);

        const user = await UserModel.findByEmailAndPassword(req.body.credentials);

        const token = user.generateJWT();

        return (res.status(200).json({ token, status: "Success" }));

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;