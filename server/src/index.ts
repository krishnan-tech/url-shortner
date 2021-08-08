import express from "express";
import mongoose from "mongoose";
require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Config Database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected!"))
  .catch((e) => console.log(e));

mongoose.connection.on("error", (err) => {
  console.log(`DB Connection error: ${err.message}`);
});

const PORT = process.env.PORT || 8080;

const urlRoutes = require("./routes/url");

app.use("/api", urlRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
