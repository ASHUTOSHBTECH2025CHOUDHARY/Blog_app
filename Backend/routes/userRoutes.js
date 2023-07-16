const express=require('express');
const { getallusers, signup, login } = require('../controllers/usercontrollers');
const router=express.Router();

router.route('/getusers').get(getallusers);
router.route('/signup').post(signup);
router.route('/login').post(login)
module.exports=router;