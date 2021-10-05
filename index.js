import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.on("open", () => console.log("Connected to Database"));

app.use(express.json());

// Routes

app.use("", require("./routes"));

app.listen(PORT, () => {
  console.info(`Server started at ${PORT}`);
});
