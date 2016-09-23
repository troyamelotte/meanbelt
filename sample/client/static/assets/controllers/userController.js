app.controller('userController', ['$scope','$location', 'userFactory', function($scope,$location, userFactory){
  $scope.newUser = {name:'',password:'', confpass:''}
  $scope.log = {name:'', password:''}
  $scope.errors = []
  $scope.loginerrors = []
  var callback = function(){
    $location.url('/main')
  }
  var errorcallback = function(data){
    $scope.loginerrors.push(data.data)
  }
  $scope.register = function(newuser){
    console.log(newuser)
    $scope.errors = []
    if(newuser.name.length<1){
      $scope.errors.push('Email is required!')
    }
    if(newuser.password.length<8){
      $scope.errors.push('Password too short!')
    }
    if(newuser.password!=newuser.confpass){
      $scope.errors.push('Passwords dont match!')
    }

    if($scope.errors.length<1){
      userFactory.register(newuser, callback)
    }

  }

  $scope.login = function(user){
    $scope.loginerrors = []
    if(user.name.length<1){
      $scope.loginerrors.push('Please enter a email!')
    }
    if(user.password.length<1){
      $scope.loginerrors.push('Please enter a password!')
    }
    if($scope.loginerrors.length<1){
      userFactory.login(user, callback, errorcallback)
    }

  }

}]);
