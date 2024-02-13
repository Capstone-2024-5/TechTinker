const express = require("express");
const cors = require("cors");
const app = express();
require("./common/db")();

app.use(cors({ origin: "*" }));

app.use(express.json());

const userRouter = require("./routes/users_route");
const contactRouter = require("./routes/contacts_route");
const newsletterRouter = require("./routes/newsletters_route");

app.use("/user", userRouter);
app.use("/contact", contactRouter);
app.use("/subscribe", newsletterRouter);

const PORT = process.env.API_SERVER_PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));