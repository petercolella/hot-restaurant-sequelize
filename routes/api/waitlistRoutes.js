const router = require("express").Router();
const db = require("../../models");

// ROUTING

// API GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases when a user visits a link
// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
// ---------------------------------------------------------------------------

router.get("/", (req, res) => {
  console.log("/api/waitlist");
  res.json("you hit the waitlist route");
});

module.exports = router;
