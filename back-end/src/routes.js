const router = require('express').Router();
const userController =  require("./controllers/userController");
const loginController = require('./controllers/loginController');
const authMiddleware = require('./controllers/authMiddleware');

router.use('/', loginController);
router.use(authMiddleware)
router.use('/user', userController);

module.exports = router;