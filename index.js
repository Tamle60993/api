const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const useRoute = require("./routes/user");
const authRoute = require("./routes/auth");

dotenv.config();
mongoose
  .connect(process.env.MONGOO_URL)
  .then(() => console.log("DBConection Successfull"))
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", useRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Bkacend Server");
});
