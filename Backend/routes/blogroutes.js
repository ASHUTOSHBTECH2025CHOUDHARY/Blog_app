const express=require('express');
const { getblogs, addblog, updateblog, deleteblog, getblog, getuserblog } = require('../controllers/blogcontoller');
const router=express.Router();

router.route('/getblogs').get(getblogs)
router.route('/addblogs').post(addblog);
router.route('/updateblogs/:id').put(updateblog);
router.route('/deleteblogs/:id').delete(deleteblog);
router.route('/:id').get(getblog)
router.route('/user/:id').get(getuserblog);

module.exports=router