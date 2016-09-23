app.factory('questionsFactory', ['$http','$location', function($http, $location) {
  // constructor for our factory
  function questionsFactory(){
    var _this = this;
    this.new = function(question, callback){
      console.log('got to new')
      $http({
        method:'post',
        url: '/newquestion',
        data:question
      }).then(function(response){
        callback()
      })
    }
    this.getall= function(callback){
      $http({
        method:'get',
        url:'/main',
      }).then(function(response){
        callback(response)
      })
    }
    this.getquestion = function(question, callback){
      $http({
        method:'get',
        url:'/getquestion/'+question.id
      }).then(function(response){
        callback(response)
      })
    }
    this.newanswer = function(answer, question, callback){
      $http({
        method:'post',
        url:'/newanswer/'+question.id,
        data:answer
      }).then(function(response){
        callback()
      })
    }
    this.addlike = function(answer, question, callback){
      $http({
        method:'get',
        url:'/like/'+question+'/answer/'+answer
      }).then(function(response){
        console.log('added like!');
        callback();
      })
    }
}
  return new questionsFactory();
}]);
