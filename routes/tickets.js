const router = require("express").Router();
const db = require("../db/db");
const { response } = require("../util/helper");

router
  .route("/t/:ticketId")
  .get((req, res) => {
    const ticketId = req.params.ticketId;
    const ticket = db.findById(ticketId);
    response(res, 200, ticket);
  })
  .patch((req, res) => {
    const ticketId = req.params.ticketId;
    const updateTicket = db.updateById(ticketId, req.body);
    response(res, 200, {
      message: "Updated successfully",
      updateTicket,
    });
  })
  .delete((req, res) => {
    const ticketId = req.params.ticketId;
    const deleteTicket = db.deleteById(ticketId);
    response(res, 203, {
      message: "Delete successfully",
    });
  });

router
  .route("/u/:username")
  .get((req, res) => {
    const username = req.params.username;
    const tickets = db.findByUsername(username);
    response(res, 200, tickets);
  })
  .patch((req, res) => {})
  .delete((req, res) => {});

router.post("/sell", (req, res) => {
  const { username, price } = req.body;
  const ticket = db.create(username, price);
  response(res, 201, {
    message: "Ticket Created Successfully",
    ticket,
  });
});

router.post("/bulk", (req, res) => {
  const { username, price, quantity } = req.body;
  const tickets = db.bulkCreate(username, price, quantity);
  response(res, 201, {
    message: "Bulk Ticket Created Successfully",
    tickets,
  });
});

router.get("/draw", (req, res) => {
  const winnerCount = req.query.wc ?? 3
  const winners = db.draw(parseInt(winnerCount));
  response(res, 200, winners);
});

router.get("/", (req, res) => {
  const tickets = db.find();
  response(res, 200, tickets);
});




module.exports = router;
