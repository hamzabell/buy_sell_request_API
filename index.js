import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.on("open", () => console.log("Connected to Database"));

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes

app.use("", require("./routes"));

app.listen(PORT, () => {
  console.info(`Server started at ${PORT}`);
});
