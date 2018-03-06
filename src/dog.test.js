import Person from './index';

test('Person.sayHi', () => {
    const testPerson = new Person('Fucker');
    expect(testPerson.sayHi()).toBe('Hi Fucker');
});
