var tictactoeApp = angular.module("tictactoeApp", [])
.controller("tictactoeController", function($scope){ 
  $scope.space=["", "", "", "", "", "", "", "", ""];
  $scope.player = "X",
  $scope.gameOver= false;

  $scope.playNow = function(index){ 
    if($scope.space[index]===""&&! $scope.gameOver){ 
      $scope.space[index] = $scope.player;
      checkWinner();
      switchPlayer

    }
  };

  function checkWinner(){ 
    var winner = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];

    for(var i = 0; i<winner.length; i++){ 
      var[a,b,c]= winner[i];
      if(
        $scope.space[a]!==""&&
        $scope.space[a]===$scope.space[b]&& $
      )
    }
  }
})