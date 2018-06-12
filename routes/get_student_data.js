var express = require('express');
var router = express.Router();
var conncetion = require('../database/data_config');

router.get('/', function (req, res) {
    var id = req.body.id;

    conncetion.query('SELECT * FROM student WHERE id = ?', [id], function (error, results, fields) {
        if (error) {
            console.log(error);
            res.json({
                status: false,
                message: 'there are some error with query'
            })
        } else {
            console.log(results);
            res.json({
                status: true,
                data: results,
                message: 'user registered sucessfully'
            });

        }
    });
});
module.exports = router;
