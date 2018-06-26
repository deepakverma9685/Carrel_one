var express = require('express');
var router = express.Router();
var conncetion = require('../database/data_config');

router.post('/', function (req, res) {

    var today = new Date();

    var student = {
        "name": req.body.name,
        "school": req.body.school,
        "class": req.body.class,
        "class_id": req.body.class_id,
        "mobile": req.body.mobile,
        "password": req.body.password,
        "created_at": today,
        "updated_at": today
    };

    var mobile = req.body.mobile;

   /* conncetion.query('SELECT 1 FROM student WHERE mobile = ?', [mobile], function (error, results, fields) {
        if (error) {
            console.log(error);
            res.json({
                status: false,
                message: 'there are some error with query'
            })
        } else {

            console.log(results   +" >>>>>>>>>>>>>>>>>>>>>");
            if (results.length > 0) {

                if (results[0].mobile == mobile) {
                    res.json({
                        status: true,
                        message: 'Mobile no. already exist',
                        data: results
                    });
                } else {


                }

            }


        }
    });
*/
    conncetion.query('INSERT INTO student SET ?', student, function (error, results, fields) {
        if (error) {
            console.log(error);
            res.json({
                status: false,
                message: 'there are some error with query'
            })
        } else {
            console.log(results);
            var id = results.insertId;
            conncetion.query('SELECT * FROM student WHERE id = ?', [id], function (error, results, fields) {
                if (error) {
                    console.log(error);
                } else {
                    res.json({
                        status: true,
                        message: 'user registered sucessfully',
                        data: results[0]
                    });
                }
            });
        }
    });



});

module.exports = router;
