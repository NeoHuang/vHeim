function SwitchListCtrl($scope, $http){
  $http.get('/api/switches').success(function(data){
    $scope.switches = data.switches;

  });

  $scope.turnSwitch = function(switchObj){

    var onOff = !switchObj.status;
    var json = '{"status": ' + onOff +'}';

    $http({
      method:'PUT',
      url: '/api/switches/turn/'+switchObj._id,
      data: json,
      headers: {'Content-Type': 'application/json', 'ACCEPT': 'application/json'}
    }).success(function(data){
      for (var i = 0; i < $scope.switches.length; i++){
        if ($scope.switches[i]._id == switchObj._id){
          $scope.switches[i].status = onOff;
          break;
        }

      }
    });
  };
  
    $scope.switchClass = function(switchObj){
      if (switchObj.status){
        return 'switch-on';
      }
      else
        return 'switch-off';
    }
  
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
