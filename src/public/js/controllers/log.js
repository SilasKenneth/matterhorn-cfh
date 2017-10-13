angular.module('mean.system')
.controller('LogController', ['$scope', 'Global', 'game', '$timeout', '$http', '$window', '$location','$dialog', function ($scope, Global, game, $timeout, $http, $window, $location, $dialog) {
  $scope.show = 1;
  $scope.games = [];

  $scope.abandonGame = () => {
    console.log($location.path('/'))
  };
  const setHttpHeader = () => {
    const token = $window.localStorage.getItem('token')
    $http.defaults.headers.common.Authorization = token;
  };
  setHttpHeader();
  $http.get('/api/games/logs')
  .then((res) => {
    console.log(res.data);
    for (let i = 0; i < res.data.length; i += 1) {
      $scope.games.push(res.data[i]);
    }
    console.log($scope.games);
  });

  $scope.parseStamp = (getStamp) => {
    const formattedStamp = new Date(getStamp);
    return formattedStamp.toUTCString({ hour12: true });
  }
}]);