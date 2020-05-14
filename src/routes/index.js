const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>
  res.status(200).send({
    message: "UHUL! The API is UP && RUNNING!!!",
  })
);

router.use("/states", require("./StateRoute"));
router.use("/cities", require("./CityRoute"));

module.exports = router;
