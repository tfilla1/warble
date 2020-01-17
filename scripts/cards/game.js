import User from './user';
class Game {
    constructor (game) {
        this.game = game;

        this.start = function(users) {
            switch (this.game) {
                case "war": this.war(users);
            }

        }

        this.war = function (users) {
            /*
            call shuffle
            deal(numOfCards)
             */
            //create deck of cards
            let deck = new Deck();
            deck.create();
            deck.shuffle();
            deck.deal(users, deck);

        }

    }
}
var users = [];
users.push(new User('tom', 0));
users.push(new User('cpu', 1));
var game = new Game('war');
game.start(users);
console.log(users[0].hand);