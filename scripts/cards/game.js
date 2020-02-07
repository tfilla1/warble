import User from './user';
class Game {
    constructor (name) {
        this.name = name;
        this.isOver = false;
        this.rules = function() {
            while(!this.isOver) {
                //play game
            }
        }

    }
}

/*
base rules is user has to play
*/

var users = [];
users.push(new User('tom', 0));
users.push(new User('cpu', 1));
var game = new Game('war');
game.start(users);
console.log(users[0].hand);