const Kontak = require("../models/kontak");
const Users = require("../models/users");

const createKontak = async (req, res) => {
    const {
        id_users,
        no_telepon,
        email
    } = req.body;

    try {
        const users = await Users.findByPk(id_users);

        if (!users) {
            res.status(500).json("Data usersv tidak ditemukan");
        }

        const kontak = await Kontak.create({
            id_users,
            no_telepon,
            email
        });

        res.status(201).json(kontak)
    } catch (error) {
        console.log(error);
    }
};

const getAllKontak = async (req, res) => {
    try {
        const kontak = await Kontak.findAll();
        res.status(201).json(kontak);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createKontak,
    getAllKontak
}
