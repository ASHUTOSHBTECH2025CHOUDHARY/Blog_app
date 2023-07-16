const express=require('express');
const { getblogs, addblog } = require('../controllers/blogcontoller');
const router=express.Router();

router.route('/getblogs').get(getblogs)
router.route('/addblogs').post(addblog);

module.exports=router