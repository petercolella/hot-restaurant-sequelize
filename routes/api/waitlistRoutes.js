const router = require("express").Router();
const { Waitlist } = require("../../models");

// ROUTING

// API GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases when a user visits a link
// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
// ---------------------------------------------------------------------------

router.get("/", (req, res) => {
  console.log("/api/waitlist");

  Waitlist.findAll()
    .then((waitlistData) => res.status(200).json(waitlistData))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
