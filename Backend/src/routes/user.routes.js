
import { Router } from "express";
import { registerUser, loginUser, getUser } from "../controllers/user.controller.js";
import { userAuth } from "../middlewares/auth.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", userAuth, getUser);

export default router;
