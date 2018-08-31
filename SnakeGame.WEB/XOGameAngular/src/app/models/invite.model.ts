export class Invite {
  callerId: string;
  targetId: string;

  constructor(callerId: string = '', targetId: string = '') {
    this.callerId = callerId;
    this.targetId = targetId;
  }
}
