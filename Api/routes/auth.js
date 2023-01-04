import express from "express";
import { Login, Logout, Register, test } from "../functions/authF.js";

const router = express.Router();
router.post("/register", Register);
router.post("/login", Login)
router.post("/logout", Logout)
router.get("/test", test)

export default router