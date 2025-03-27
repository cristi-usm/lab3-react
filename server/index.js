const express = require("express");
const path = require("path");
const compression = require("compression");

const app = express();
const dist = path.join(__dirname, "..", "dist");
const port = process.env.PORT || 3000;

app.use(compression(), express.static(dist));

app.get("/*", function (_, res) {
    res.sendFile(path.join(dist, "index.html"));
});

app.listen(port, () => console.log(`App available on http://localhost:${port}`));
