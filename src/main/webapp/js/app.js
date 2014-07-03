var app = angular.module("geektic", ['ngRoute']);

app.controller('GeekCtrl', function($scope, $http) 
{
    
	$scope.constructionCombo = function()
	{
		$http.get('/api/geek/combo').success(function(interets) 
		{
            $scope.interets = interets;
        });
	}
	
	$scope.constructionCombo();
	
	$scope.recherche = function()
    {
		if ($scope.sexe == "" || $scope.sexe == null || $scope.interet == "" || $scope.interet == null )
		{
			alert("Merci de sélectionner un centre d'interêt et un sexe");
			return;
		}
    	$http.get('/api/geek/bysex/' + $scope.sexe + '/' + $scope.interet.interet).success(function(geeks)
		{
            $scope.geeksbysex = geeks;
        });
    };
});