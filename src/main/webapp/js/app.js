var app = angular.module("geektic", ['ngRoute']);

app.controller('GeekCtrl', function($scope, $http) 
{	
	//Fonction recherche
	$scope.recherche = function()
    {
		//Vérification que les champs sexe et centre d'inérêt sont selectionnés
		if ($scope.sexe == "" ||$scope.interet == "" || $scope.sexe == null || $scope.interet == null )
		{
			alert("Merci de sélectionner un centre d'interêt et un sexe");
			return;
		}
    	$http.get('/api/geek/bysex/' + $scope.sexe + '/' + $scope.interet.interet).success(function(geeks)
		{
            $scope.geeksbysex = geeks;
        });
    };
    
    //Fonction recherche par ID
    $scope.rechercheById = function(id)
    {
    	//Recupère information en fonction de l'id
    	$http.get('/api/geek/byId/' +id).success(function(geek)
		{
    		
            $scope.leGeek = geek;
        });
    }
    //Fonction recherche par interet
    $scope.constructionCombo = function()
	{
    	//Recupère information en fonction de l'interet
		$http.get('/api/geek/combo').success(function(interets) 
		{
            $scope.interets = interets;
        });
	}
    $scope.constructionCombo();
});