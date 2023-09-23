const express = require("express");
const router = express.Router();

const usercontroller = require("../controller/usercontroller");

router.post("/user/signup", usercontroller.signupuser);

module.exports = router;