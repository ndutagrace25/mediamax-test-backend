const express = require("express");

const app = express();

const { todo } = require("./routes");

// Enabling CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "POST, GET, OPTIONS, DELETE, PUT,PATCH"
  );
  next();
});

// Linking body parser for url reading
app.use(
  express.urlencoded({
    extended: false,
    limit: "10gb",
  })
);

app.use(
  express.json({
    limit: "10gb",
  })
);

app.use("/todo", todo);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
