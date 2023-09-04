const {Pool}=require('pg');
const pool=new Pool({
    user:'postgres',
    host:'localhost',
    database:'postgres',
    port:5432,
    password:'comenius12',
});
module.exports=pool;