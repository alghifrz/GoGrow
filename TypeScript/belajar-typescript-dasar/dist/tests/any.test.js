"use strict";
describe('Any', function () {
    it('should suppurt in typescript', function () {
        const person = {
            id: 1,
            name: 'Alghif',
            age: 20
        };
        person.age = 21;
        person.address = 'Bandung';
        console.info(person);
    });
});
