const express = require("express");
const cors = require("cors");
const app = express();
require("./common/db")();

app.use(cors({ origin: "*" }));

app.use(express.json());

const userRouter = require("./routes/users_route");
app.use("/user", userRouter);

const PORT = process.env.API_SERVER_PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));