var express = require('express');
var router = express.Router();


router.get('/', function (req, res, nex) {
    var message = '';
    res.render('insert_question.ejs',{message: message});

});

router.post('/admin_login', function (req, res, next) {

        var name = post.user_name;
        var pass = post.password;

        if (typeof name == "carreladmin" && typeof pass == "carrel1554") {
            console.log("success");
            res.redirect('/insert_questions');
        } else {
            message = 'Wrong Credentials.';
            res.render('index.ejs', {message: message});
        }

});

module.exports = router;
