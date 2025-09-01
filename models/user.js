const mongoose = require("mongoose");
const users = mongoose.model("users", new mongoose.Schema({
    name: {
        type: String,
        requred: true,
        maxLength: 5,
        maxLength: 15,
    },
    email: {
        type: String,
        requred: true,
        mixLength: 5,
        maxLength: 255,
        unique: true,
    },
    password: {
        type: String,
        requred: true,
        minLength: 5,
        maxLength: 255,
    }
}));
module.exports = users;