app.controller('MessageController', function($scope)
{
		$.getJSON('localhost:3000',function(response){
			$scope.messages=response.results;
			$scope.$apply();

		});

});