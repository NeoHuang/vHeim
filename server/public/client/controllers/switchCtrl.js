function SwitchListCtrl($scope, $http){
  $http.get('/api/switches').success(function(data){
    $scope.switches = data.switches;

  });

  $scope.turnSwitch = function(switchObj){

    var onOff = (switchObj._status == true)?'true':'false';
    var json = '{"status":"' + onOff +'"}';
    alert(json);

    $http({
      method:'PUT',
      url: '/api/switches/turn/'+switchObj._id,
      data: json,
      headers: {'Content-Type': 'application/json', 'ACCEPT': 'application/json'}
    }).success(function(data){
      $location.path('/switches');
    });
  };
  
};
function SwitchNewCtrl($scope, $http, $location){
  $scope.saveSwitch = function(){
  var json = angular.toJson($scope.switch);
    $http({
      method:'POST',
      url: '/api/switches',
      data: json,
      headers: {'Content-Type': 'application/json', 'ACCEPT': 'application/json'}
    }).success(function(data){
      $location.path('/switches');
    });
  }
};
