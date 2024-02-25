const express= require("express");
const { SignUp,SignIn } = require("../Controller/AuthController");
const AuthRouter= express.Router();

AuthRouter.post("/register", SignUp);
AuthRouter.post("/login", SignIn)

module.exports={
    AuthRouter
}