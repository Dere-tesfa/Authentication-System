const mongoose = require("mongoose");
const users = mongoose.model("users", new mongoose.Schema({
    name: {
        type: String,
        requred: true,
        minLength: 4,
        maxLength: 15,
    },
    email: {
        type: String,
        requred: true,
        minLength: 4,
        maxLength: 255,
        unique: true,
    },
    password: {
        type: String,
        requred: true,
        minLength: 3,
        maxLength: 255,
    }
}));
module.exports = users;