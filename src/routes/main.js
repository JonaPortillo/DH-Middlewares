let express = require('express')
let router = express.Router()
let controller = require('../controllers/mainController')
let userLogs = require('../middlewares/userLogs')
let UserdAdmin = require("../middlewares/adminUsers")

router.get('/', userLogs, controller.index)
router.get('/admin', UserdAdmin, controller.admin)

module.exports = router
