import { Router } from "express";
import { login, register } from "../controller/auth.controller.js";
import { validate } from "../middleware/validate.js";
import {
    authRegisterSchema,
    authLoginSchema
} from "../validation/auth.validation.js";

const router = new Router()

router
    .post('/register', validate(authRegisterSchema), register)
    .post('/login', validate(authLoginSchema), login)

export {
    router
}