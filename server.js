const express = require("express");
const app = express();
const PORT = 3000;

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to the Express.js Server!");
});

// About Route
app.get("/about", (req, res) => {
  res.send("This is a simple web server built using Express.js.");
});

// Contact Route
app.get("/contact", (req, res) => {
  res.json({
    email: "student@example.com",
    phone: "123-456-7890",
  });
});

// Random Number Route
app.get("/random", (req, res) => {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  res.send(`Random Number: ${randomNum}`);
});

// Handle Undefined Routes
app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
