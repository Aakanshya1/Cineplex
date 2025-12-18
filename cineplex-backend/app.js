const express = require("express");
const db = require("./models");

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Cineplex API running");
});

db.sequelize.authenticate()
  .then(() => {
    console.log(" Database connected");

    return db.sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(` Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(" Database connection failed:", err);
  });
