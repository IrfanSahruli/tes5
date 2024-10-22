const {
    createKontak,
    getAllKontak
} = require("../controllers/kontak");
const express = require("express");

const router = express.Router();

router.post("/kontak", createKontak);
router.get("/kontak", getAllKontak);

module.exports = router;