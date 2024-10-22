const Users = require("../models/users");

const createUsers = async (req, res) => {
    const {
        nama
    } = req.body;

    try {
        const user = await Users.create({
            nama
        });
        res.status(2001).json(user);
    } catch (error) {
        console.log(error);
    }
};

const getAllUsers = async (req, res) => {
    try {
        const user = await Users.findAll();
        res.status(201).json(user);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createUsers,
    getAllUsers
}