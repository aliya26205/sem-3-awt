
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(1337, () => {
    console.log("Server running at http://localhost:1337");
});
