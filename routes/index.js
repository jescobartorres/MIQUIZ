var express = require('express');
var router = express.Router();

//incluir controladores
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Mi Quiz' });
});

// Autoload de comandos con :quizId
router.param('quizId', quizController.load); // autoload :quizId
router.param('commentId', commentController.load); //autoload : commentId

// Definición de rutas de /quizes

// GET QUIZES/QUESTION
//router.get('/quizes/question', quizController.question);
// GET QUIZES/ANSWER
//router.get('/quizes/answer', quizController.answer);

router.get('/quizes',                       quizController.index);
router.get('/quizes/:quizId(\\d+)',         quizController.show);
router.get('/quizes/:quizId(\\d+)/answer',  quizController.answer);
router.get('/quizes/new',                   quizController.new);
router.post('/quizes/create',               quizController.create);
router.get('/quizes/:quizId(\\d+)/edit',    quizController.edit);
router.put('/quizes/:quizId(\\d+)',         quizController.update);
router.delete('/quizes/:quizId(\\d+)',      quizController.destroy);


// GET author
router.get('/author', function (req, res) {
    res.render('author', { errors: [] });
});

module.exports = router;