var express = require('express');
var router = express.Router();
var conncetion = require('../database/data_config');

router.post('/', function (req, res) {

    var class_id = req.body.class_id;
    var subject_id = req.body.subject_id;

    var sql = 'SELECT * FROM questions WHERE class_id = ? AND subject_id = ?';
    console.log(sql + class_id);

        conncetion.query(sql,[class_id,subject_id], function (error, results) {
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