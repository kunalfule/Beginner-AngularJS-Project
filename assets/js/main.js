var app = angular.module("myShoppingList", ['ngResource']); 

app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    }]);

app.run(function($rootScope) {
    $rootScope.error = false;
});
/*
app.factory('myService',function($resource){
  var postFruitData = function(){
    return $resource('insert_Cart_Data', {}, {saveData: {method:'POST', isArray: true}});
  }
  return{
    saveData: postFruitData
  }
});
*/
app.controller("myCtrl", ['$scope', '$http', '$templateCache', function($scope, $http, $templateCache) {
    $scope.products = ["Milk", "Bread", "Cheese"];
	
	//function to add and check products in cart 
    $scope.addItem = function ($event) {
            if(!$scope.addMe){
                alert("Enter Item Name.");
                $event.stoppropogastion();
            }  
              
	   if($scope.products.indexOf($scope.addMe) == -1){
                
	      $scope.products.push($scope.addMe);
	   }else{
	     $scope.error = $scope.addMe;
		 $('.error').show(); 
		  setTimeout(function() {
		  $scope.error = 0;
		  $('.error').hide(); 
		  }, 2000);
	   }   
    }    
	
	//function to remove product from cart
    $scope.removeItem = function (x) {
        $scope.products.splice(x, 1);
    }
	
	//function to save the products in cart into  database.
	$scope.saveItem = function () {
            /*test code two
             myService.saveData({}, $scope.data).$promise.then(function(data){
                //you will get data here
             });
	   /*code test run*/
           var data = $scope.products;
          alert(angular.isArray(data));
		$http({
                        method : "POST",
                        url : "insert_Cart_Data",
                        data: { amp : $scope.products},
			}).then(function mySuccess(response) {
			     alert(response);
                             console.log(response);
				$scope.myWelcome = response.data;
			}, function myError(response) {
				$scope.myWelcome = response.statusText;
			});
	}
}]);