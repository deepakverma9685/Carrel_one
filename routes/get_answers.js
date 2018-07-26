var express = require('express');
var router = express.Router();
var conncetion = require('../database/data_config');

router.post('/',function (req,res) {

    var que_list = [];
    var ans_list = [];
    var marks = 0;


    var str_question_id = req.body.question_id;
    var str_answers = req.body.answers;
    var class_id = req.body.class_id;
    var classes = req.body.classes;
    var subject = req.body.subject;
    var subject_id = req.body.subject_id;
    var student_id = req.body.student_id;

    var questions = str_question_id.split(",");
    for(var i = 0; i < questions.length; i++) {
       que_list.push(questions[i])

    }

    console.log(que_list);

    var anss = str_answers.split(",");
    for(var j = 0; j < anss.length; j++) {
        ans_list.push(anss[j])

    }

    console.log(ans_list);


    var sql = 'SELECT * FROM questions WHERE class_id = ? AND subject_id = ?';
    console.log(sql + class_id);

    conncetion.query(sql,[class_id,subject_id], function (error, results) {
        if (error) {
            console.log(error);
        } else {
            console.log(results);
            if (results.length>0){
                for(var i = 0; i < results.length; i++) {
                    if(results[i].id == que_list[i]){
                        if (results[i].answer == ans_list[i]){
                            marks++;
                            console.log("marks >>>>>>>>>>>>>>"+marks);
                        }
                    }

                }
            }
        }
    });



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
