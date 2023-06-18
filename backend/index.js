const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();

connectToMongo();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use("/api/auth", require("./routes/auth.js"));
app.use("/api/sale", require("./routes/sales.js"));
app.use("/api/blog", require("./routes/blog.js"));
app.use("/api/property", require("./routes/property.js"));
app.use("/api/admin", require("./routes/admin.js"));
app.use("/api/mail", require("./routes/mailer.js"));

app.get("/", (req, res) => {
  res.json("Tested ok!");
});

app.listen(4000);
