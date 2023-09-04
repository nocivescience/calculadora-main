const pool=require('../db');
const calcController=(req,res)=>{
    res.render('calc');
};
module.exports={
    calcController,
};