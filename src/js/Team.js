export default class Team {
  constructor() {
    this.members = new Set();
  }

  addMembers(...heroes) {
    heroes.forEach((hero) => {
      this.members.add(hero);
    });
  }

  *[Symbol.iterator]() {
    const members = Array.from(this.members);
    for (const member of members) {
      yield member;
    }
  }
}
