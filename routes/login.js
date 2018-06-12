var express = require('express');
var router = express.Router();
var conncetion = require('../database/data_config');

router.post('/',function (req,res) {

    var today = new Date();
    var users = {
        "name":req.body.name,
        "email":req.body.email,
        "password":req.body.password,
        "created_at":today,
        "updated_at":today
    };

    conncetion.query('INSERT INTO users SET ?',users, function (error, results, fields){
        if (error){
            console.log(error);
            res.json({
                status:false,
                message:'there are some error with query'
                })
        }else {
            res.json({
                status:true,
                data:results,
                message:'user registered sucessfully'
            });

            get_user_data(results.insertId);
        }
    });
    
});

function get_user_data(id) {
     console.log("laoding");
    conncetion.query('SELECT * FROM users WHERE id = ?',[id], function (error, results, fields){
        if (error){
            console.log(error);
           /* res.json({
                status:false,
                message:'there are some error with query'
            })*/
        }else {
            console.log(results);
            /* res.json({
                 status:true,
                 data:results,
                 message:'user registered sucessfully'
             })*/
        }
    });
}

module.exports = router;