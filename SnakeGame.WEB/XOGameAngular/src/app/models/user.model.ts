export class User {
    name: string;
    surname: string;
    age: number;
    username: string;

    constructor(name: string = '', surname: string = '', age: number = null, username: string = '') {
      this.name = name;
      this.surname = surname;
      this.age = age;
      this.username = username;
    }
}
