app.controller('EditCardController', function ($scope, FlashCardsFactory, $stateParams, $state) {
  $scope.card = FlashCardsFactory.getById($stateParams.id);

	$scope.categories = FlashCardsFactory.categories;
	$scope.saveCard = function () {
		FlashCardsFactory.updateCard($scope.card)
		.then(function (updatedCard) {
			$scope.$parent.editing = false;
		});
	};
  $scope.delete = function (){
    FlashCardsFactory.deleteCard($scope.card._id);
  };
});