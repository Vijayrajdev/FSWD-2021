const express = require("express");
const app = express();
const Port = 3001;
const categoryRoute = require("./routes/Categories_route");
const productRoute = require("./routes/Product_routes");

// Middlewares
app.use(express.json());

// Routes
app.use("/categories", categoryRoute);
app.use("/products", productRoute);

// listening port
app.listen(Port, () => {
  console.log(`Server is up and running in port ${Port}`);
});
