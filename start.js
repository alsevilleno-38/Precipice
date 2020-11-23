const express = require("express");
const path = require("path");
const app = express();
const port = 3030;
app.use(express.static(path.join(__dirname, "public")));
app.get("/index", (req, res, next) => {
    res.sendFile(path.join(__dirname, "index.html"));
})
app.use("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "index.html"));
})
app.listen(port);
console.log("Connection Successful!");
console.log(`Listening to port ${port}...`);