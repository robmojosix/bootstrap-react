#!/bin/env node
const express = require("express");
const hotServerMiddleware = require("./hotServerMiddleware");
const port = 3000;

async function main() {
  const app = express();

  app.use("/dist", express.static("dist"));

  app.use(await hotServerMiddleware());

  app.get("*", (req, res) => {
    res.status(404).send("Not Found");
  });

  app.listen(port, () => console.log(`App running: http://localhost:${port}`));
}

main();
