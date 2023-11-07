var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/trips", (req, res) => {
  Trip.find(req.body.departure && req.body.arrival && req.body.date)
    .then((response) => response.json())
    .then((data) => {
      res.json({ trips: data });
    });
});
module.exports = router;
