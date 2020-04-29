"use strict";

const { db } = require("./server/db");
const app = require("./server/index");
const PORT = process.env.PORT || 1337;

db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
  .then(() => {
    console.log("db synced");
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  });

//In your development enviroment, you can keep all of your app's secret API keys in a files called `.env`, in your project root. This file is included in the .gitignore - it will NOT be tracked or show up on Github. On your production server, you can add these keys as enviroment variables, so that they can still be read by the Node process on process.env.

if (process.env.NODE_ENV !== "production")
  require("../juzmooth-internal/server/config/config");
