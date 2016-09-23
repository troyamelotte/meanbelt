var controller = require('../controllers/controller.js');
module.exports = function(app){
  app.get('/', controller.index);
  app.post('/new', controller.new);
  app.post('/login', controller.login);
  app.get('/logout', controller.logout);
  app.use(loginAuthentication);
  app.get('/main', controller.main);
  app.get('/getuser', controller.getUser);
  app.post('/newquestion', controller.newQuestion);
  app.get('/getquestion/:id', controller.getQuestion);
  app.post('/newanswer/:id', controller.newAnswer);
  app.get('/like/:question_id/answer/:answer_id', controller.likeAnswer);
}
function loginAuthentication(req,res,next){
  if(req.session.user){
    next();
  }else{
    res.status(401).send('user not logged in')
  }
}
