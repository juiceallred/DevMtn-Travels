angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv, $stateParams) {
  $scope.destination = mainSrv.getById($stateParams.id);
  

})
