const game={
    team1:'Bayern dfrd',
    team2:'Bob',
    players:[
        [
        'Arpita',
        'somi',
        'deeksha',
        'aditi',
        'Kashish',
    ],
    [
        'Arpita',
        'somi',
        'deeksha',
        'aditi',
        'Kashish',
    ],
    ],
    score:'4.0',
    scored:['lewws','frrefd','frfr','frrfdf'],
    date:'Nov 9th, 2037',
    odds:{
        team:1.33,
        x:3.23,
        team:6.5,

    },
};
const [players1,players2]=game.players;
console.log(players1,players2);

const [gk,...fieldPlayers]=players1;
console.log(gk,fieldPlayers);

const allPlayers=[...players1,...players2];
console.log(allPlayers);

const playersFinal=[...players1,'hello','hii','how'];
console.log(playersFinal);
console.log("hello world");

