/* eslint-disable no-console */

// @flow

// const str = 'ES6'
// console.log(`Hello ${str}`)

class Person {
  name: string

  constructor(name: string) {
      this.name = name;
  }

  sayHi() {
      console.log(`Hi ${this.name}`);
      return `Hi ${this.name}`;
  }
}

// new Person('Steve').sayHi()
export default Person;
