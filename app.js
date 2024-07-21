const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT;

mongoose.set("strictQuery", false);

const mongoDB = process.env.CON_STRING;

app.set('view engine', 'ejs');
app.set('views', './views');


main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(mongoDB);
    console.log("Connected to MongoDB");
}

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog"); //Import routes for "catalog" area of site

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.

// Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
