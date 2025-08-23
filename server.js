const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Temporary in-memory store
let tickets = [];

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Lottery Syndicate Backend is running!" });
});

// Get all tickets
app.get("/tickets", (req, res) => {
  res.json(tickets);
});

// Add a ticket
app.post("/add-ticket", (req, res) => {
  const { numbers } = req.body;
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return res.status(400).json({ error: "Invalid ticket numbers" });
  }
  const newTicket = { id: tickets.length + 1, numbers };
  tickets.push(newTicket);
  res.json(newTicket);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
