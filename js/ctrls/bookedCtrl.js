angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams) {
  $scope.booking = mainSrv.getById($stateParams.id);
})
