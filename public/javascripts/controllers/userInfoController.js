var app2 = angular.module('userInfoController',[]);

app2.controller('userInfoCtrl', function ($scope){


  $scope.transaction = {};
  $scope.userInfo = {
    "id": "58a96bf70d552a371dea5b84",
    "picture": "http://bit.ly/1onMfJL",
    "name": "Myrtle Meyers",
    "company": "KAGGLE",
    "email": "myrtlemeyers@kaggle.co.uk",
    "phone": "8774453729",
    "address": "473 Aurelia Court, Dale, Oregon, 1139",
    "transactions":[
        {
          "txnId": 1,
          "txnAmt": 400,
          "txnType": "credit",
          "txnTime": "04-06-2017"
        }
      ]
  };

  $scope.addTxn = function(){
    console.log();
    $scope.userInfo.transactions.push($scope.transaction);
    $scope.transactions = {};
  }
  $scope.removeTxn = function(transaction) {
    $scope.userInfo.transactions.splice($scope.userInfo.transactions.indexOf(transaction),1);
  }
});
