import { validate } from "@middlewares"
import { AuthController } from "./auth"

const { Router } = require("express")

const AuthRouter = Router()


AuthRouter
    .get("/login", AuthController.Login)
    .post("/refresh-access-token", AuthController.RefreshAccessToken)

export {AuthRouter}