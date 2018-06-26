var express = require('express');
var router = express.Router();
var conncetion = require('../database/data_config');


router.post('/',function (req,res) {

    conncetion.query('SELECT * FROM classes',function (error, results) {
        if (error) {
            console.log(error);
            res.json({
                status: true,
                message: 'there are some error with query'
            })
        } else {
            console.log(results);
            res.json({
                status: true,
                message: 'Success',
                data: results
            });
        }
    })
});

module.exports = router;