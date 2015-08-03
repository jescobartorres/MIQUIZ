var express = require('express');
var router = express.Router();

//incluir controladores
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Mi Quiz' });
});


// GET QUIZES/QUESTION
router.get('/quizes/question', quizController.question);
// GET QUIZES/ANSWER
router.get('/quizes/answer', quizController.answer);


/* GET author */
router.get('/author', function (req, res) {
    res.render('author', { errors: [] });
});


module.exports = router;
