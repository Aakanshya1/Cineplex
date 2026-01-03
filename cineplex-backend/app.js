const express = require("express");
const db = require("./models");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3001;
const cors = require("cors");
app.use(express.json());
app.use(bodyParser.json());

const userRouter = require("./router/user.router");
const watchlistRouter = require("./router/watchlist.router");
const reviewRouter = require('./router/review.router')
 const path = require("path");

app.get("/", (req, res) => {
  res.send("Cineplex API running");
});


// const allowedOrigins=[
//   "http://localhost:5173",
// ]

// app.use(cors({
//   origin: allowedOrigins,
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: true 
// }));
app.use(cors());

//Routes
 app.use("/auth", userRouter);
  app.use("/watchlist", watchlistRouter);
  app.use("/review", reviewRouter)
app.use('/avatars', express.static(path.join(__dirname, 'public/avatars')));

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


