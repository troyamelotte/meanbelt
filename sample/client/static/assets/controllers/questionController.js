app.controller('questionController', ['$scope', '$location','$routeParams', 'userFactory','questionsFactory', function($scope,$location,$routeParams, userFactory, questionsFactory){
  $scope.user=''

  var usercallback = function(response){
    $scope.user = response.data
  }
  var redirect = function(){
    $location.url('/main')
  }
  userFactory.getcurrentuser(usercallback);
  $scope.logout = function(){
    userFactory.logout()
  }

  $scope.allquestions=[]
  questionsFactory.getall(function(data){
    $scope.allquestions=data.data;
  })

  $scope.getquestion = function(){
    questionsFactory.getquestion($routeParams, function(result){
      $scope.currentquestion = result.data;
    })
  }
  $scope.errors = []
  $scope.question = {question:'', description:'',name:$scope.user};
  $scope.newquestion = function(question){
    $scope.errors = []
    if(question.question.length<10){
      $scope.errors.push('Your question must be longer than 10 characters!')
    }
    if($scope.errors.length==0){
      question.name=$scope.user
      questionsFactory.new(question, redirect)
    }
  }

  $scope.newanswer = {answer:'', details:'', name:$scope.user}
  $scope.createanswer = function(answer){
    $scope.answererrors = []
    if(answer.answer.length<5){
      $scope.answererrors.push('Your answer must be at least 5 characters!');
    }
    if($scope.answererrors.length==0){
      answer.name=$scope.user;
      questionsFactory.newanswer(answer, $routeParams, function(){
        $location.url('/show/'+$routeParams.id);
      });
    }
  }

  $scope.cancel = function(){
    $location.url('/main')
  }

  $scope.cancelanswer = function(){
    $location.url('/show/'+$routeParams.id)
  }

  $scope.addlike = function(answer){
    questionsFactory.addlike(answer, $routeParams.id, $scope.getquestion);
  }
}])
