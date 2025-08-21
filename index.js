const express = require("express");
const app = express();

app.use(express.json());

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
