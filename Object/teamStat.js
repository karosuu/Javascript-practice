const team = {
  _players: [{
    firstname: 'Pablo',
    lastName: 'Sanchez',
    age: 11
  },
  ],
  _games: [{
    opponnet: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
  },
  ],
  get players() {
    return this._players
  },
  get games() {
    return this._games
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastname: lastName,
      age: age,
    };
    this.players.push(player);
  },
  addGame(oppName, points, oppPoints) {
const game = {
  opponent: oppName,
  points: points,
  opponentPoints: oppPoints
}
this.games.push(game)
  },
};
team.addPlayer('Steph', 'Curry', '28')
team.addPlayer('Lisa', 'Leslie', '44')
team.addPlayer('Bugs', 'Bunny', '76')

console.log(team.players)


team.addGame('Sea Lions', 100, 50)
team.addGame('Wolves', 56, 90)
team.addGame('Tigers', 30, 47)

console.log(team.games)
