var express = require('express');
var router = express.Router();
var conncetion = require('../database/data_config');

router.post('/',function (req,res) {

    var question_id = [];
    var answers = [];
    question_id = req.body.question_id;
    answers = req.body.answers;
    var counter = 0;

    conncetion.query('SELECT * FROM questions', function (error, results){
        if(error){
            console.log(error);
            throw error;
        }else {
            console.log(results);
            for(var i=0;i<results.length;i++){
                for(var j=0;j<question_id.length;j++){
                    if(results[i].get("id").map(question_id[j])){
                        for (var k;k<answers.length;k++){
                            if(results[i].get("answer").map(answers[k])){
                                 counter++;
                            }else {
                                console.log('wrong')
                            }
                        }
                    }
                }
            }

            res.json({
                status: true,
                message: 'success',
                marks:counter
            });
        }
    });



});
