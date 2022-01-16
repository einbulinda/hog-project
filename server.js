import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors"; // allows/disallows cross-site communication
import dotenv from "dotenv";
import userRoutes from "./backend/routes/userRoutes.js";
import productRoutes from "./backend/routes/productRoutes.js";
import categoryRoutes from "./backend/routes/categoryRoutes.js";
import orderRoutes from "./backend/routes/orderRoutes.js";
import mpesaRoutes from "./backend/routes/mpesaRoutes.js";
import {
  errorHandler,
  notFound,
} from "./backend/middlewares/errorMiddleware.js";
import path from "path";
import helmet from "helmet"; // creates headers that protect from attacks (security)

const app = express();
app.use(helmet());

// use environment variables
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// Allow cross origin requests
const whitelist = [
  "http://localhost:3000",
  "http://localhost:5000",
  "https://hseofglamour.herokuapp.com/",
];

const corsOptions = {
  origin: function (origin, callback) {
    console.log("** origin of request" + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable");
      callback(null, true);
    } else {
      console.log("Origin rejected");
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/mpesa", mpesaRoutes);

// Error handling middlewares
app.use(notFound);
app.use(errorHandler);

const db = process.env.MONGODB_URI;
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  // serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // handle react routing, return all requests to React app
  app.get("*", (req, res) => {
    req.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// Connect the DB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => console.log(`Server running on port ${port}`))
  )
  .catch((error) => console.log(`${error} did not connect`));
