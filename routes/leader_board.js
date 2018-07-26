var express = require('express');
var router = express.Router();
var conncetion = require('../database/data_config');

router.get('/', function (req, res, nex) {

    conncetion.query('SELECT * FROM user_answered ORDER BY marks DESC', function (error, results) {
        if(error){
            console.log(error);
            res.json({
                status:false,
                message:'there are some error with query'
            })
        }else{
            console.log(results);
            res.json({
                status:true,
                message:'succes',
                data:results
            })
        }
    })

});

module.exports = router;