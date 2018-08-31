export class Player {
  id: string;
  username: string;
  pType: string;

  constructor(id: string = '', username: string = '', pType: string = '') {
    this.id = id;
    this.username = username;
    this.pType = pType;
  }
}
