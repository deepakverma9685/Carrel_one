var express = require('express');
var router = express.Router();
var conncetion = require('../database/data_config');

router.get('/', function (req, res, nex) {
    var message = '';
    // res.render('insert_question.ejs',{message: message});
    res.render('insert_question.ejs');

});


router.post('/post', function (req, res, nex) {

    var today = new Date();

    var questions = {
        "subject_id": req.body.subject_id,
        "class_id": req.body.class_id,
        "question": req.body.question,
        "option_a": req.body.option_a,
        "option_b": req.body.option_b,
        "option_c": req.body.option_c,
        "option_d": req.body.option_d,
        "answer": req.body.answer,
        "created_at": today,
        "updated_at": today
    };

    if (questions != null) {

        conncetion.query('INSERT INTO questions SET ?',questions, function (error, results) {
            if(error){
                console.log(error);
               /* res.json({
                    status:true,
                    message:'there are some error with query'
                })*/
            }else{
                console.log(results);
                var get_last_id = results.insertId;
                var results = "";
                conncetion.query('SELECT * FROM questions WHERE id = ?',[get_last_id], function (error, results) {
                    if(error){
                        console.log(error)
                    }else {
                        console.log(results)
                        res.redirect('/thank')
                    }
                });

            }
        })
    }
});

module.exports = router;