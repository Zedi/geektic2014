var app = angular.module("geektic", ['ngRoute']);

app.controller('GeekCtrl', function($scope, $http) 
{	
	//Fonction recherche
	$scope.recherche = function()
    {
		//V�rification que les champs sexe et centre d'in�r�t sont selectionn�s
		if ($scope.sexe == "" ||$scope.interet == "" || $scope.sexe == null || $scope.interet == null )
		{
			alert("Merci de s�lectionner un centre d'inter�t et un sexe");
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
    	//Recup�re information en fonction de l'id
    	$http.get('/api/geek/byId/' +id).success(function(geek)
		{
    		
            $scope.leGeek = geek;
        });
    }
    //Fonction recherche par interet
    $scope.constructionCombo = function()
	{
    	//Recup�re information en fonction de l'interet
		$http.get('/api/geek/combo').success(function(interets) 
		{
            $scope.interets = interets;
        });
	}
    $scope.constructionCombo();
});