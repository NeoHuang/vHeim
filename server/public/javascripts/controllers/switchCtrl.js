function SwitchListCtrl($scope, $http){
  $http.get('/api/switches').success(function(data){
    $scope.switches = data.switches;

  })
};
