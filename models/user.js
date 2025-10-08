const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    email: { type: String, required: true, unique: true },
    department: { type: String, required: true },
    skill: { type: String, required: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
