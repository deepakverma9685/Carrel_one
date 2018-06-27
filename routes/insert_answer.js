var express = require('express');
var router = express.Router();
var conncetion = require('../database/data_config');

router.post('/',function (req,res) {

    var ansers = {
        "username": req.body.username,
        "clas": req.body.clas,
        "marks": req.body.marks,
        "subjects": req.body.subjects
    };

    conncetion.query('INSERT INTO user_answered SET ?',[ansers], function (error, results){
        if(error){
            console.log(error);
            throw error;
        }else {
            console.log(results);
            res.json({
                status: true,
                message: 'success'
            });
        }
    });



});

module.exports = router;
