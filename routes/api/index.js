const router = require("express").Router();

const clearRoutes = require("./clearRoutes");
const tableRoutes = require("./tableRoutes");
const waitlistRoutes = require("./waitlistRoutes");

router.use("/clear", clearRoutes);
router.use("/tables", tableRoutes);
router.use("/waitlist", waitlistRoutes);

module.exports = router;
