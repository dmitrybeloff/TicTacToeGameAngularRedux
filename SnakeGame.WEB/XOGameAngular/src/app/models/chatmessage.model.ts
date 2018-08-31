export class ChatMessage {
  name: string;
  username: string;
  message: string;

  constructor(name: string = '', username: string = '', message: string = '') {
    this.name = name;
    this.username = username;
    this.message = message;
  }
}
