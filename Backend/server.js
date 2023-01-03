const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3600;

app.use(cors());
app.use(express.json());

// middleware for cookie
app.use(cookieParser());

app.use("/routes", require("./routes/authRouter"));
app.use("/routes/api", require("./routes/api/accounts"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
