const router = require("express").Router();
const { Table, Waitlist } = require("../../models");

// ROUTING

// I added this below code so you could clear out the table while working with the functionality.
// Don"t worry about it!

router.delete("/", async (req, res) => {
  // Empty out the arrays of data
  console.log("/api/clear");

  await Table.destroy({ where: {} });
  await Waitlist.destroy({ where: {} });

  res.json({ ok: true });
});

module.exports = router;
