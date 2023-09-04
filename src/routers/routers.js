const {calcController}=require('../controllers/controllers');
const express=require('express');
const router=express.Router();
router.get('/',calcController);
module.exports=router;