export class GameMove {
  gameId: number;
  playerId: string;
  cellIndex: number;

  constructor(gameId: number, playerId: string, cellIndex: number) {
    this.gameId = gameId;
    this.playerId = playerId;
    this.cellIndex = cellIndex;
  }
}
