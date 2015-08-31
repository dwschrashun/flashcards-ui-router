app.directive('menuBar', function(){
  return {
    restrict: 'E',
    templateUrl: '/js/directives/menuBar/menuBar.html',
    // scope: {
    //   card: '='
    // },
    // link: function (scope, element, attributes) {
    //   scope.answerQuestion = function (answer) {
    //     if (scope.card.answered) return;
    //     scope.card.answered = true;
    //     scope.card.answeredCorrectly = answer.correct;
    //     if (answer.correct) ScoreFactory.increase();
    //     else ScoreFactory.decrease();
    //     scope.editing = false;
    //   };
    // }
  };
});
