const express = require("express");
const app = express();
const sequelize = require("./config/db");
const userRoutes = require("./routes/userRoutes");

require("dotenv").config();

app.use(express.json());
app.use("/users", userRoutes);


sequelize.sync().then(() => {
    console.log("Database connected and synced");
    app.listen(process.env.PORT, () =>
        console.log(`Server running on http://localhost:${process.env.PORT}`)
    );
});
