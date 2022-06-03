if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const { connection } = require("./config/mongoConnection");
const app = express();
const port = process.env.PORT || 4001;
const route = require("./routes/index");
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(route);

connection().then(async () => {
  app.listen(port, () => {
    console.log(`LISTENING TO PORT ${port}`);
  });
});
