const express = require("express");
const morgan = require("morgan");
const routes = require("./routes");
const cors = require("cors");

require("dotenv").config();
require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(routes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});