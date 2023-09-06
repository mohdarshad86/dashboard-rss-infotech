const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 3001;
const route = require("./routes/route");
mongoose.set("strictQuery", true);
const app = express();
const cors = require('cors')
require('dotenv').config()

app.use(express.json());
app.use(cors());

mongoose
    .connect(
        process.env.MONGO_URL,
        { useNewUrlParser: true }
    )
    .then(() => {
        console.log("mongoDB is connected");
    })
    .catch((err) => {
        console.log(err.message);
    });

app.use("/", route);

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
