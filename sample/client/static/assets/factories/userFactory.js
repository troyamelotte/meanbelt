
app.factory('userFactory', ['$http','$location', function($http, $location) {
  // constructor for our factory
  function userFactory(){
    var _this = this;
    this.register = function(user, callback){
      $http({
            method: 'post',
            url: '/new',
            data:user,
          }).then(function(response) {
            callback()
          })
    }
    this.login = function(user, callback, errorcallback){
      $http({
        method:'post',
        url:'/login',
        data:user
      }).then(function(response){
        callback(response);
      },function(response) {

        errorcallback(response)
      });
    }
  this.getusers = function(callback){
    $http({
      method:'get',
      url:'/main',
    }).then(function(response){
      callback(response)
    });
  }
  this.logout=function(){
    $http({
      method:'get',
      url:'/logout',
    }).then(function(response){
      $location.url('/')
    })
  }
  this.getcurrentuser = function(callback){
    $http({
      method:'get',
      url: '/getuser'
    }).then(function(response){
      callback(response)
    })
  }
}
  return new userFactory();
}]);
