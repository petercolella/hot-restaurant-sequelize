const router = require("express").Router();
const db = require("../../models");

// ROUTING

// I added this below code so you could clear out the table while working with the functionality.
// Don"t worry about it!

router.post("/", (req, res) => {
  // Empty out the arrays of data
  console.log("/api/clear");

  res.json("you hit the clear route");
});

module.exports = router;
