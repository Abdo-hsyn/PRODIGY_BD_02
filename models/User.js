const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const { v4: uuidv4 } = require("uuid");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
        },
        allowNull: false,
        unique: true,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = User;
