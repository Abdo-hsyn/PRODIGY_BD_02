const User = require("../models/User");

exports.createUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        if (!name || !email || !age) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const user = await User.create({ name, email, age });
        res.status(201).json(user);
    } catch (err) {
        res
            .status(500)
            .json({ error: "Internal Server Error", details: err.message });
    }
};

exports.getAllUsers = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
};

exports.getUserById = async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
};

exports.updateUser = async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    const { name, email, age } = req.body;
    await user.update({ name, email, age });
    res.json(user);
};

exports.deleteUser = async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    await user.destroy();
    res.json({ message: "User deleted" });
};
