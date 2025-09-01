const bcrypt = require('bcrypt');
const _ = require("lodash");
const userimport = require("../models/user")
const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
    userimport.find({})
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.send(error);
        })
})

router.post("/", async (req, res) => {
    let user = userimport.findOne({ email: req.body.email })
    if (!user) return res.status(400).send("Faild!");
    user = new userimport(_.pick(req.body, ['name', 'email', 'password']));//lodash
    // user = new userimport({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password
    // })

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();
    res.send(_.pick(user, ['_id', 'name', 'email', 'password']));
})
module.exports = router;