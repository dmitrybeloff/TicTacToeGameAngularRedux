export class Game {
  id: number;
  currentId: string;
  currentUsername: string;
  deck: string[];

  constructor(id: number = 0, currenId: string = '', currentUsername: string = '', deck: string[] = []) {
    this.id = id;
    this.currentId = currenId;
    this.currentUsername = currentUsername;
    this.deck = deck;
  }
}
