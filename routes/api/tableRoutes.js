const router = require("express").Router();
const { Table, Waitlist } = require("../../models");

// ROUTING

// API GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases when a user visits a link
// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
// ---------------------------------------------------------------------------

router.get("/", (req, res) => {
  console.log("GET /api/tables");

  Table.findAll()
    .then((tableData) => res.status(200).json(tableData))
    .catch((err) => res.status(500).json(err));
});

// API POST Requests
// Below code handles when a user submits a form and thus submits data to the server.
// In each of the below cases, when a user submits form data (a JSON object)
// ...the JSON is pushed to the appropriate JavaScript array
// (ex. User fills out a reservation request... this data is then sent to the server...
// Then the server saves the data to the tableData array)
// ---------------------------------------------------------------------------

router.post("/", (req, res) => {
  // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
  // It will do this by sending out the value "true" have a table
  // req.body is available since we're using the body parsing middleware
  console.log("POST /api/tables", req.body);

  Table.findAll()
    .then((tableData) => {
      if (tableData.length < 5) {
        Table.create(req.body)
          .then(() => res.status(200).json(true))
          .catch((err) => res.status(500).json(err));
      } else {
        Waitlist.create(req.body)
          .then(() => res.status(200).json(false))
          .catch((err) => res.status(500).json(err));
      }
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
