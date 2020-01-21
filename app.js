var app = angular.module('myApp', []);
var posturl = 'https://jsonplaceholder.typicode.com/posts';
var commenturl= 'https://jsonplaceholder.typicode.com/comments'
app.controller('postCommentController', function($scope, $http,$anchorScroll, $location) {

$http.get(posturl).then(function (response) {
  $scope.postList = response.data;
});

$scope.gotoRoute = function() {
  $anchorScroll.yOffset = 50;
  var route = 'divRoute';
  if ($location.hash() !== route) {
    $location.hash('divRoute');
    } else {
      $anchorScroll();
      }
};

$scope.getComment = function(item) {
  $scope.commentList = [];
  $http.get(commenturl).then(function (response) {
    $scope.infoList = response.data; }).then(()=> {
      $scope.infoList.map(it=> {
        if (it.postId === item.userId){
         $scope.commentList.push({name: it.name , id: it.postId, body:it.body, email:it.email});
      }   
   });
});

};
});


