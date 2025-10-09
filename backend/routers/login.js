const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const bcrypt = require("bcryptjs");
const router = express.Router();
const userimport = require("../models/user");
require('dotenv').config();
app.use(express.json());


router.post("/", async (req, res) => {
    //     try {
    //         const { email, password } = req.body;
    //         const users = await userimport.findOne({ email });
    //         if (!users) return res.status(400).json({ message: "user not found" });



    //         const isPasswordvalid = await bcrypt.compare(password, users.password);
    //         if (!isPasswordvalid) return res.status(400).json({ message: "invalid password or email" });

    //         const token = jwt.sign({ id: users._id }, process.env.JWT_SECRET);
    //         res.json({ message: tokens token });
    //     }
    //     catch (err) {
    //         res.json({ message: err.message });
    //     }
    const { email, password } = req.body;
    let users = await userimport.findOne({ email });
    if (!users) return res.status(400).send("user not found!");

    const ispassword = await bcrypt.compare(password, users.password);
    if (!ispassword) return res(404).send("invalid password and email");

    const token = jwt.sign({ id: users }, process.env.JWT_SECRET);
    res.json({ message: "tokens", token })
});

module.exports = router;