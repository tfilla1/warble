//todo: build war, then we'll talk
// idk, it seemed like a good idea
const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    //in the future build the player
    //its just a form

/*
a game has a list of players
    and a pile, which is the cards that are currently being played
    on play, the cards will be checked against each other and a winner
    will be decided
*/


//create initial game
// 2 players
// each get half of the deck
let deck = [
    {
        "rank" : "A",
        "suit" : "spade",
        "value" : [1,14]
    },
    {
        "rank" : "A",
        "suit" : "club",
        "value" : [1,14]
    },
    {
        "rank" : "A",
        "suit" : "heart",
        "value" : [1,14]
    },
    {
        "rank" : "A",
        "suit" : "diamond",
        "value" : [1,14]
    },
    {
        "rank" : "2",
        "suit" : "spade",
        "value" : [2]
    },
    {
        "rank" : "2",
        "suit" : "club",
        "value" : [2]
    },
    {
        "rank" : "2",
        "suit" : "heart",
        "value" : [2]
    },
    {
        "rank" : "2",
        "suit" : "diamond",
        "value" : [2]
    },
    {
        "rank" : "3",
        "suit" : "spade",
        "value" : [3]
    },
    {
        "rank" : "3",
        "suit" : "club",
        "value" : [3]
    },
    {
        "rank" : "3",
        "suit" : "heart",
        "value" : [3]
    },
    {
        "rank" : "3",
        "suit" : "diamond",
        "value" : [3]
    },
    {
        "rank" : "4",
        "suit" : "spade",
        "value" : [4]
    },
    {
        "rank" : "4",
        "suit" : "club",
        "value" : [4]
    },
    {
        "rank" : "4",
        "suit" : "heart",
        "value" : [4]
    },
    {
        "rank" : "4",
        "suit" : "diamond",
        "value" : [4]
    },
    {
        "rank" : "5",
        "suit" : "spade",
        "value" : [5]
    },
    {
        "rank" : "5",
        "suit" : "club",
        "value" : [5]
    },
    {
        "rank" : "5",
        "suit" : "heart",
        "value" : [5]
    },
    {
        "rank" : "5",
        "suit" : "diamond",
        "value" : [5]
    },
    {
        "rank" : "6",
        "suit" : "spade",
        "value" : [6]
    },
    {
        "rank" : "6",
        "suit" : "club",
        "value" : [6]
    },
    {
        "rank" : "6",
        "suit" : "heart",
        "value" : [6]
    },
    {
        "rank" : "6",
        "suit" : "diamond",
        "value" : [6]
    },
    {
        "rank" : "7",
        "suit" : "spade",
        "value" : [7]
    },
    {
        "rank" : "7",
        "suit" : "club",
        "value" : [7]
    },
    {
        "rank" : "7",
        "suit" : "heart",
        "value" : [7]
    },
    {
        "rank" : "7",
        "suit" : "diamond",
        "value" : [7]
    },
    {
        "rank" : "8",
        "suit" : "spade",
        "value" : [8]
    },
    {
        "rank" : "8",
        "suit" : "club",
        "value" : [8]
    },
    {
        "rank" : "8",
        "suit" : "heart",
        "value" : [7]
    },
    {
        "rank" : "8",
        "suit" : "diamond",
        "value" : [8]
    },
    {
        "rank" : "9",
        "suit" : "spade",
        "value" : [9]
    },
    {
        "rank" : "9",
        "suit" : "club",
        "value" : [9]
    },
    {
        "rank" : "9",
        "suit" : "heart",
        "value" : [9]
    },
    {
        "rank" : "9",
        "suit" : "diamond",
        "value" : [9]
    },
    {
        "rank" : "10",
        "suit" : "spade",
        "value" : [10]
    },
    {
        "rank" : "10",
        "suit" : "club",
        "value" : [10]
    },
    {
        "rank" : "10",
        "suit" : "heart",
        "value" : [10]
    },
    {
        "rank" : "10",
        "suit" : "diamond",
        "value" : [10]
    },
    {
        "rank" : "J",
        "suit" : "spade",
        "value" : [11]
    },
    {
        "rank" : "J",
        "suit" : "club",
        "value" : [11]
    },
    {
        "rank" : "J",
        "suit" : "heart",
        "value" : [11]
    },
    {
        "rank" : "J",
        "suit" : "diamond",
        "value" : [11]
    },
    {
        "rank" : "Q",
        "suit" : "spade",
        "value" : [12]
    },
    {
        "rank" : "Q",
        "suit" : "club",
        "value" : [12]
    },
    {
        "rank" : "Q",
        "suit" : "heart",
        "value" : [12]
    },
    {
        "rank" : "Q",
        "suit" : "diamond",
        "value" : [12]
    },
    {
        "rank" : "K",
        "suit" : "spade",
        "value" : [13]
    },
    {
        "rank" : "K",
        "suit" : "club",
        "value" : [13]
    },
    {
        "rank" : "K",
        "suit" : "heart",
        "value" : [13]
    },
    {
        "rank" : "K",
        "suit" : "diamond",
        "value" : [13]
    }
];

let game = {
    players: [
        {
            name: 'tom',
            avi: 'avatar.jpg',
            hand: [],
            pending: [],
            setHand: function(hand) {
                this.hand = hand;
                return this.hand;
            },
            showHand: function() {
                let returnString = '';
                this.hand.forEach(h => {
                    returnString += h.rank + ' of ' + h.suit + 's, worth ' + h.value[0] + ';\n';
                    
                });
                return returnString;
            }
        },
        {
            name: 'spooky',
            avi: 'avatar.jpg',
            hand: [],
            pending: [],
            setHand: function(hand) {
                this.hand = hand;
                return this.hand;
            },
            showHand: function() {
                let returnString = '';
                this.hand.forEach(h => {
                    returnString += h.rank + ' of ' + h.suit + 's, worth ' + h.value[0] + ';\n';
                    
                });
                return returnString;
            }
        }
    ],
    pile: [],
    deck: deck
}

/*
a player has a hand, which is the deck of cards they are holding
 and a pending, which is the cards picked up from winning
 
 once the hand has run out, the non will get shuffled and put into the hand
 doesn't have to happen this way, but i think it'll be great
*/

//dealing war
//each player gets half the deck
function deal() {
    var hand = [];

    
}

// a function to shuffle the deck
// if i was a real dev, i'd do this not so brute forcey
// but everyone's gotta start somewhere
function shuffle() {
    let available = [];
    console.log(deck);
    deck.forEach(card => {
        available.push(card);
    });
    //console.log(available);
    let cards = [];
    /*
        - go through deckData.cards (52)
        - add one card to deck
        - remove that card from available
    */ 
    while (available.length > 0) {
        let cardNumber = Math.floor(Math.random() * (available.length - 1)); 

        cards.push(available[cardNumber]);
        available.splice(cardNumber, 1);
    }

    game.deck = cards;
    return cards;
}


function deal(numOfUsers) {
    //breakpoints
    //deck.length/numOfUsers == how many break points
    //console.log(this.deck);
    var breakpoint = game.deck.length / numOfUsers;
    var leftover = game.deck.length % numOfUsers;

    //go from 0 to breakpoint and remove those cards
    for(var i = 0; i < numOfUsers; i++) {
        game.players[i].setHand(game.deck.slice(0, breakpoint - 1))
        game.deck.splice(0, breakpoint);
    }
}



// the game
// both players play, then check who wins
// winner gets the cards in add to their pending

function loop() {
    let cards = shuffle();
        
    console.log(cards);
    readline.question('how many players today? ', answer => {
        console.log(`great, have fun!`);

        //todo: check is blank
        //todo: check is int
        deal(answer);
        console.log(game.players[0].showHand());   
        console.log(game.players[1].showHand());   

        readline.question('wanna play?', answer => {

            //ask the user if they want to play
            //enter loop
            //need an exit
            console.log(answer);
            // while (answer == 'y') {
            //     //play();
            // }
            console.log(answer);
            answer = readline.question('again?', again => { return again; });
            console.log(answer);

            //readline.close();
        })
        //readline.close();
    });
    //deal();
}

loop();