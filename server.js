const mongoose = require("mongoose");
const express = require("express");
const importRouter = require("./routers/register")
const login = require("./routers/login");
require('dotenv').config(); //load file

const app = express();
const db = process.env.MONGO_URI;
mongoose.connect(db);
try {
    console.log("connected to mongodb!!...");

}
catch (err) {
    console.log('could not connect to mongodb...', err.message);

}
app.use(express.json());
app.use("/api/users", importRouter);
app.use("/api/login", login)
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server port is running on http://localhost:${port}`);

})