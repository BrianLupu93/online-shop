const express = require("express");
const app = express();

const PORT = process.env.PORT || 3600;

app.use(express.json());

app.use("/login", require("./routes/auth/login"));
// app.use("/logout", require("./routes/auth/logout"));
app.use("/register", require("./routes/auth/register"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
