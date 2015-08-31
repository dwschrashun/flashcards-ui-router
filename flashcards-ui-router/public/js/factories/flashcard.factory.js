app.factory('FlashCardsFactory', function ($http, currentFlashCards, $state) {
  var all_cards;
  var categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
  ];

  function getFlashCards (category) {
    var config = {};
    if (category) config.params = { category: category };
    return $http.get('/cards/', config)
    .then(function(response){
      return response.data;
    })
    .then(function (cards) {
      // while (currentFlashCards.length) {
      //   currentFlashCards.pop();
      // }
      // cards.forEach(function (card) {
      //   currentFlashCards.push(card);
      // });
      angular.copy(cards, currentFlashCards);

      return currentFlashCards;
    });
  }
  function createFlashCard (card) {
    return $http.post('/cards', card)
    .then(function (response) {
      return response.data;
    })
    .then(function (card) {
      currentFlashCards.push(card);
      return card;
    });
  }
  function updateFlashCard (card) {
    return $http.put('/cards/' + card._id, card)
    .then(function (response) {
      return response.data;
    });
  }

  function getById(id){
    for(var i =0; i<currentFlashCards.length; i++){
      if(currentFlashCards[i]._id == id){
        return currentFlashCards[i];
      }
    }
  }

  function deleteCard(id){
    $http.delete('/cards/' + id)
    .then(function(response){
      $state.go('scoreBoard.flashCards');
    }).catch(function(err){
      console.log(err);
    });
  }

  return {
    getFlashCards: getFlashCards,
    createCard: createFlashCard,
    updateCard: updateFlashCard,
    categories: categories,
    getById: getById,
    deleteCard: deleteCard
  };
});
