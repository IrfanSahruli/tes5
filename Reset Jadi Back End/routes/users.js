const {
    createUsers,
    getAllUsers
} = require("../controllers/users");
const express = require("express");

const router = express.Router();

router.post("/users", createUsers);
router.get("/users", getAllUsers);

module.exports = router;
