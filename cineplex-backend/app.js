const express = require("express");
const db = require("./models");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(bodyParser.json());

const userRouter = require("./router/user.router");
const watchlistRouter = require("./router/watchlist.router");

  app.use("/auth", userRouter);
  app.use("/watchlist", watchlistRouter);

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


