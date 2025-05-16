
const { Router } = require("express");
const { registerUser, loginUser, getUser } = require("../controllers/user.controller");
const { userAuth } = require("../middlewares/auth");
const router = Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/me", userAuth, getUser)

module.exports = router;