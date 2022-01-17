const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"), // allows/disallows cross-site communication
  userRoutes = require("./backend/routes/userRoutes"),
  productRoutes = require("./backend/routes/productRoutes"),
  categoryRoutes = require("./backend/routes/categoryRoutes"),
  orderRoutes = require("./backend/routes/orderRoutes"),
  mpesaRoutes = require("./backend/routes/mpesaRoutes"),
  path = require("path"),
  helmet = require("helmet");
const {
  errorHandler,
  notFound,
} = require("./backend/middlewares/errorMiddleware");

const app = express();
require("./database"); // Connect to database
require("dotenv").config(); // use environment variables

app.use(helmet()); // creates headers that protect from ( attacks (security)
app.use(cors({ credentials: true })); // Allow cross origin requests
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/mpesa", mpesaRoutes);

// Error handling middlewares
app.use(notFound);
app.use(errorHandler);

if (process.env.NODE_ENV === "production") {
  console.log(`Running on ${process.env.NODE_ENV} environment`);
  // serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // handle react routing, return all requests to React app
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}.....`));
