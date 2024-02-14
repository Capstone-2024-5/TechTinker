const express = require("express");
const cors = require("cors");
const app = express();
require("./common/db")();

app.use(cors({ origin: "*" }));

app.use(express.json());

const userRouter = require("./routes/users_route");
const contactRouter = require("./routes/contacts_route");
const newsletterRouter = require("./routes/newsletters_route");
const registrationRouter = require("./routes/registration_route");
const { registerUser } = require("./controllers/registration_controller");

app.use("/user", userRouter);
app.use("/contact", contactRouter);
app.use("/subscribe", newsletterRouter);
app.use("/user", userRouter);
app.use("/api", registrationRouter);
app.post("/api/register", registerUser);

const PORT = process.env.API_SERVER_PORT || 5000;

app.listen(PORT, console.log(`Server API running on port ${PORT}`));
