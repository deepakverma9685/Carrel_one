var express = require('express');
var router = express.Router();
var conncetion = require('../database/data_config');

router.post('/', function (req, res) {

    var mobile = req.body.mobile;
    var password = req.body.password;

    conncetion.query('SELECT * FROM student WHERE mobile = ?', [mobile], function (error, results, fields) {
        if (error) {
            console.log(error);
            res.json({
                status: false,
                message: 'there are some error with query'
            })
        } else {
            console.log(results);
            if(results.length>0){
                if(results[0].password==password){
                    res.json({
                        status: true,
                        message: 'Logged in sucessfully',
                        data: results[0]
                    });
                }else {
                    res.json({
                        status: false,
                        message: 'Password did not match'
                    });
                }
            }



        }


    });

});

function get_user_data(id) {
    console.log("laoding");
    conncetion.query('SELECT * FROM users WHERE id = ?', [id], function (error, results, fields) {
        if (error) {
            console.log(error);
            /* res.json({
                 status:false,
                 message:'there are some error with query'
             })*/
        } else {
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