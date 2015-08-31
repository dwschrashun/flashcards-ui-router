var app = angular.module('flashCards', ["ui.router"]);

app.value('currentFlashCards', []);

app.config(function ($stateProvider) {
	$stateProvider.state("scoreBoard", {
		url: "",
		templateUrl: "../templates/scoreBoard.html",
		controller: "StatsController"
		}
	).state("scoreBoard.newCardForm", {
		url: "/newCardForm",
		templateUrl: "../templates/newCardForm.html",
		controller: "NewCardController"
		}
	).state("scoreBoard.flashCards", {
		url: "/flashCards",
		templateUrl: "../templates/flashCards.html",
		controller: "MainController"
	});
});