import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/database.js";
import router from "./routes/index.js";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Database Connected...");
  // db.sync({ force: true });
} catch (error) {
  console.error(error);
}

// app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "SP MarketPlace API",
      version: "1.0.0",
      description: "A simple Express MarketPlace API",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./controllers/*.js"],
};

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.listen(5000, () => console.log("Server running at port 5000"));
