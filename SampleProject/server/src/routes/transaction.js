const express = require("express");
const { isLoggedIn } = require("../middlewares/User");
const { getTransaction } = require("../controllers/transactionController");
const router = express.Router();


router.route('/get').get(isLoggedIn , getTransaction)
module.exports = router;